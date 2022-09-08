const mongoose = require("mongoose");

const BankAccountSchema = new mongoose.Schema(
  {
    currency: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bankAccounts", BankAccountSchema);
