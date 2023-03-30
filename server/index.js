require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const pg = require('pg');
const argon2 = require('argon2');

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

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

// POST REQUEST
app.post('/api/vendorAccount', (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;

  if (!firstName || !lastName || !username || !password) {
    throw new ClientError(400, 'Invalid Inputs');
  } else {

    // hash password
    argon2
      .hash(password)
      .then(hashedPassword => {
        const sql = `
          insert into "vendorAccount" ("firstName", "lastName", "username", "hashedPassword")
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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
