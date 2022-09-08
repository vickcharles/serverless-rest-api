"use strict";

const { createUser } = require("./functions/User");
const {
  createTransaction,
  getAllTransaction,
} = require("./functions/Transactions");

// User

module.exports.createUser = createUser;
module.exports.createTransaction = createTransaction;

// Transactions

module.exports.getAllTransaction = getAllTransaction;
