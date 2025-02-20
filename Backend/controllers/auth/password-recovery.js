// const db = require('../../database/db-connectivity');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const APIError = require("../../utlis/ApiError");
const { sendVerificationEmail } = require("../../middlewares/email");
const User = require("../../models/userSchema.model");

const forgotPassword = async (req, res) => {
  let { email } = req.body;
  if (!email) {
    throw new APIError("All fields are required", 400);
  }

  email = email.trim();

  const user = await User.findOne({ email });

  if (!user) {
    throw new APIError("Email not found", 404);
  }

  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();
  user.verificationCode = verificationCode;
  user.verificationCodeExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
  user.resetPasswordExpiresAt = Date.now();
  user.isReset = true;
  await user.save();
  await sendVerificationEmail(user.email, verificationCode);

  return res.status(200).json({
    success: true,
    message: "Verification email sent successfully",
  });
};

const newPassword = async (req, res) => {
  let { email, newPassword } = req.body;

  if (!email || !newPassword) {
    throw new APIError("All fields are required", 400);
  }
  email = email.trim();

  const user = await User.findOne({ email });

  if (!user) {
    throw new APIError("User not found", 404);
  }
  if (!user.isReset) {
    throw new APIError("User is not requested for password update", 400);
  } else if (user.resetPasswordExpiresAt < Date.now()) {
    throw new APIError("OTP not verified", 400);
  }

  const samePassword = await bcrypt.compare(newPassword, user.password);

  if (samePassword) {
    throw new APIError(
      "New password cannot be the same as the old password",
      400
    );
  }

  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  const hashedNewPassword = await bcrypt.hash(newPassword, salt);

  user.password = hashedNewPassword;
  user.isReset = false;
  user.resetPasswordExpiresAt = Date.now();
  await user.save();

  return res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
};

module.exports = {
  forgotPassword,
  newPassword,
};
