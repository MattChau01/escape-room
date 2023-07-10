require('dotenv/config');
const argon2 = require('argon2');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const express = require('express');
const jwt = require('jsonwebtoken');
const pg = require('pg');
const staticMiddleware = require('./static-middleware');
const authorizationMiddleware = require('./authorizationMiddleware');

const db = new pg.Pool({
  connectionString: `${process.env.DATABASE_URL}`,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleWare = express.json();

app.use(staticMiddleware);
app.use(jsonMiddleWare);

app.get('/api/listings/catalog', (req, res, next) => {

  const sql = `
    select *
    from "listings"
  `;

  db.query(sql)
    .then(result => {

      res.json(result.rows);

    })
    .catch(err => next(err));

});

app.post('/api/vendorAccounts/signup', (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;

  if (!firstName || !lastName || !username || !password) {
    throw new ClientError(400, 'Invalid Inputs');
  } else {

    argon2
      .hash(password)
      .then(hashedPassword => {
        const sql = `
          insert into "vendorAccounts" ("firstName", "lastName", "username", "hashedPassword")
          values ($1, $2, $3, $4)
          returning *
        `;

        const params = [firstName, lastName, username, hashedPassword];

        db.query(sql, params)
          .then(result => {
            res.status(200).json(result.rows[0]);
          })
          .catch(err => next(err));

      })
      .catch(err => {
        console.error(err);
      });

  }

});

app.post('/api/vendorAccounts/signin', (req, res, next) => {

  const { username, password } = req.body;

  if (!username || !password) {
    throw new ClientError(401, 'Invalid input');
  } else {
    const sql = `
      select "userId", "hashedPassword"
      from "vendorAccounts"
      where "username" = $1
    `;

    const params = [username];

    db.query(sql, params)
      .then(result => {
        const [user] = result.rows;

        if (!user) {
          throw new ClientError(401, 'Invalid login');
        }

        const { userId, hashedPassword } = user;
        return argon2
          .verify(hashedPassword, password)
          .then(isMatching => {
            if (!isMatching) {
              throw new ClientError(401, 'Invalid login');
            } else {

              const payload = { userId, username };
              const token = jwt.sign(payload, process.env.TOKEN_SECRET);

              res.json({
                token,
                user: payload
              });
            }
          });
      })
      .catch(err => next(err));
  }
});

// **********
// COMMENT OUT TO TEST IN TERMINAL
// UNCOMMENT AUTHORIZATION BELOW WHEN DONE TESTING REQUESTS
// **********

app.use(authorizationMiddleware);

app.post('/api/listings/post', (req, res, next) => {

  const { userId, roomName, description, imageUrl, address, price, minimumPlayers, difficulty, timeLimit, phoneNumber } = req.body;

  const userIdNum = Number(userId);
  const priceNum = Number(price);
  const minimumPlayersNum = Number(minimumPlayers);
  const timeLimitNum = Number(timeLimit);

  if (!userId || !roomName || !description || !imageUrl || !address || !price || !minimumPlayers || !difficulty || !timeLimit || !phoneNumber) {
    throw new ClientError(400, 'All fields are requried');
  } else {

    const sql = `
      insert into "listings" ("userId", "roomName", "description", "imageUrl", "address", "price", "minimumPlayers", "difficulty", "timeLimit", "phoneNumber")
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      returning *
    `;

    const params = [userIdNum, roomName, description, imageUrl, address, priceNum, minimumPlayersNum, difficulty, timeLimitNum, phoneNumber];

    db.query(sql, params)
      .then(result => {
        const listing = result.rows[0];
        res.status(200).json(listing);
      })
      .catch(err => next(err));

  }

});

app.get('/api/listings/vendor/:userId', (req, res, next) => {

  const userId = req.params.userId;

  const userIdNum = Number(userId);

  if (!userId) {
    throw new ClientError(400, 'Invalid input');
  } else {
    const sql = `
    select *
    from "listings"
    where "userId" = $1
  `;

    const params = [userIdNum];

    db.query(sql, params)
      .then(result => {
        const vendorListing = result.rows;
        res.json(vendorListing);
      })
      .catch(err => next(err));

  }

});

// TEST WITH GET REQUEST TO SEARCH BY ENTRY ID
app.get('/api/listings/findId/:entryId', (req, res, next) => {

  const entryId = req.params.entryId;

  const entryIdNum = Number(entryId);

  if (!entryId) {
    throw new ClientError(400, 'Invalid input');
  } else {
    const sql = `
      select *
      from "listings"
      where "entryId" = $1
    `;

    const params = [entryIdNum];

    db.query(sql, params)
      .then(result => {
        const listing = result.rows;
        res.json(listing);
      })
      .catch(err => next(err));

  }

});

// PATCH REQUEST
app.patch('/api/listings/patch/:entryId', (req, res, next) => {

  const entryId = req.params.entryId;
  const entryIdNum = Number(entryId);

  const {
    roomName,
    description,
    imageUrl,
    address,
    price,
    minimumPlayers,
    difficulty,
    timeLimit,
    phoneNumber
  } = req.body;

  if (
    !roomName ||
    !description ||
    !imageUrl ||
    !address ||
    !price ||
    !minimumPlayers ||
    !difficulty ||
    !timeLimit ||
    !phoneNumber
  ) {
    throw new ClientError(400, 'Invalid input');
  } else if (Object.keys(req.body).length === 0) {
    throw new ClientError(400, 'Invalid input');
  } else {
    const sql = `
      update "listings"
      set
        "roomName" = $1,
        "description" = $2,
        "imageUrl" = $3,
        "address" = $4,
        "price" = $5,
        "minimumPlayers" = $6,
        "difficulty" = $7,
        "timeLimit" = $8,
        "phoneNumber" = $9,
      where "entryId" = $10
      returning *
    `;

    const params = [
      roomName,
      description,
      imageUrl,
      address,
      price,
      minimumPlayers,
      difficulty,
      timeLimit,
      phoneNumber,
      entryIdNum];

    db.query(sql, params)
      .then(result => {
        const listing = result.rows;
        res.json(listing);
      })
      .catch(err => next(err));

  }

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
