const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    phoneUid: {
      type: String,
      required: true,
    },
    walletAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    idType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
