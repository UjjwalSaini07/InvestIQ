const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
    },
    verificationCodeExpiresAt: {
      type: Date,
    },
    isReset: {
      type: Boolean,
      default: false,
    },
    resetPasswordExpiresAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const UserSchema = mongoose.model("User", userSchema);

module.exports = UserSchema;
