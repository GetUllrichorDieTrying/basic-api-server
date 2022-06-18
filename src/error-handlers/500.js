'use strict';

function serverErrorHandler(err, req, res, next) {
  const error = err.message ? err.message : err;

  let errorObj = {
    status: 500,
    path: req.path,
    message: error,
  };

  res.status(500).json(errorObj);
}

module.exports = serverErrorHandler;
