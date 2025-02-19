const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  verifyEmail,
} = require("../../controllers/auth/auth-controllers");
const {
  validateRequest,
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} = require("../../middleware/reqSchema");
const {
  forgotPassword,
  newPassword,
} = require("../../controllers/auth/password-recovery");
const asyncHandler = require("../../middleware/asyncHandler");

router.post(
  "/register",
  validateRequest(registerSchema),
  asyncHandler(registerUser)
);
router.post("/login", validateRequest(loginSchema), asyncHandler(loginUser));
router.post("/verifyotp", asyncHandler(verifyEmail));

router.post(
  "/forgotPassword",
  validateRequest(forgotPasswordSchema),
  asyncHandler(forgotPassword)
);
router.post(
  "/resetPassword",
  validateRequest(resetPasswordSchema),
  asyncHandler(newPassword)
);

module.exports = router;
