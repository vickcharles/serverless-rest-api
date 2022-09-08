const mongoose = require("mongoose");

const PagoMovilAccount = new mongoose.Schema(
  {
    code: String,
    number: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pagoMovilAccount", PagoMovilAccount);
