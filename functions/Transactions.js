"use strict";

const connectToDatabase = require("../db");
const Transaction = require("../models/Transaction");

module.exports = {
  createTransaction: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
      Transaction.create(JSON.parse(event.body))
        .then((user) =>
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(user),
          })
        )
        .catch((err) =>
          callback(null, {
            statusCode: err.statusCode || 500,
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(err),
          })
        );
    });
  },
  getAllTransaction: (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
      Transaction.find()
        .then((users) =>
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(users),
          })
        )
        .catch((err) =>
          callback(null, {
            statusCode: err.statusCode || 500,
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(err),
          })
        );
    });
  },
};
