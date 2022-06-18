'use strict';

function validator(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Try entering a query like this: /hello?name=Juan');
  }
  next();
}

module.exports = validator;
