const APIError = require("../../types/APIError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendWelcomeEmail, sendVerificationEmail } = require("../../middleware/email");

// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// });
const User = require("../../model/userSchema");

const registerUser = async (req, res) => {
  let { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new APIError("All fields are required", 400);
  }

  name = name.trim();
  email = email.trim();

  // const [existinguser] = await pool
  //   .promise()
  //   .query("SELECT * FROM users WHERE email =?", [email]);
  // if (existinguser.length > 0) {
  //   throw new APIError("User already exists", 400);
  // }

  const existUser = await User.findOne({ email }); //using mongoose
  if (existUser?.isVerified) {
    throw new APIError("User already exists", 400);
  } else if(existUser && !existUser.isVerified){
    await User.findByIdAndDelete(existUser._id);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // const [newUser] = await pool
  //   .promise()
  //   .query("INSERT INTO users  (name,email,password) VALUES (?,?,?)", [
  //     name,
  //     email,
  //     hashedPassword,
  //   ]);

  // return res.status(201).json({
  //   success: true,
  //   data: {
  //     id: newUser.insertId,
  //     name,
  //     email,
  //   },
  // });

  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const user = new User({
    name,
    email,
    password: hashedPassword,
    verificationCode,
    verificationCodeExpiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  });
  await user.save();

  sendVerificationEmail(user.email, verificationCode);

  return res.status(201).json({
    success: true,
    message: "OTP sent to your email",
  });
};

const loginUser = async (req, res) => {

  let { email, password } = req.body;

  if (!email || !password) {
    throw new APIError("All fields are required", 400);
  }

  email = email.trim();

  // const [user] = await pool
  //   .promise()
  //   .query("SELECT * FROM users WHERE email = ?", [email]);
  // if (user.length == 0) {
  //   throw new APIError("User not found", 400);
  // }
  // const foundUser = user[0];

  const foundUser = await User.findOne({ email });
  console.log(foundUser);
  if (!foundUser) {
    throw new APIError("User not found", 404);
  }

  const isPassword = await bcrypt.compare(password, foundUser.password);

  if (!isPassword) {
    throw new APIError("Invalid Password", 400);
  }

  const accessTokenKey = process.env.ACCESS_TOKEN_SECRET;
  const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET;

  if(!accessTokenKey || !refreshTokenKey){
    throw new APIError("Internal Server Error , Missing token Secret", 500);
  }

  const accessToken = await jwt.sign(
    { id: foundUser._id },
    accessTokenKey,
    { expiresIn: "15h" }
  );

  const refreshToken = await jwt.sign(
    { id: foundUser._id },
    refreshTokenKey,
    { expiresIn: "7d" }
  );

  return res.status(200).json({
    success: true,
    message: "Login Successful",
    data: {
      id: foundUser._id,
      name: foundUser.name,
      email: foundUser.email,
      token : {
        accessToken : accessToken,
        refreshToken : refreshToken
      }
    },
  });
};

const verifyEmail = async (req, res) => {
  let { email , code } = req.body;

  email = email?.trim().toLowerCase();

  if (!email || !code) {
    throw new APIError("All fields are required", 400);
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new APIError("User not found", 404);
  }

  if (user.isVerified && user.verificationCode === undefined) {
    throw new APIError("Email already verified", 400);
  } else if (user.verificationCodeExpiresAt < Date.now()) {
    throw new APIError("OTP expired", 400);
  } else if (user.verificationCode !== code) {
    throw new APIError("Invalid OTP", 400);
  }

  user.isVerified = true;
  user.verificationCode = undefined;
  user.resetPasswordExpiresAt = Date.now() + 5 * 60 * 1000 // 5 minute
  await user.save();

  await sendWelcomeEmail(user.email, user.name);

  return res.status(200).json({
      success: true,
      message: "Email Verified Successfully",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });
}

module.exports = {
  registerUser,
  loginUser,
  verifyEmail,
};
