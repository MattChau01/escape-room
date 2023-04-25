const jwt = require('jsonwebtoken');
const ClientError = require('./client-error');

function authorizationMiddleware(req, res, next) {
  try {
    const accessToken = req.get('X-Access-Token');
    if (!accessToken) {
      throw new ClientError(401, 'Authentication requried');
    } else {
      const payload = jwt.verify(accessToken, process.env.TOKEN_SECRET);
      req.user = payload;
      next();
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = authorizationMiddleware;
