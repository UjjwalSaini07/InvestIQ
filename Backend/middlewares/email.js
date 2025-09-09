const transporter = require("./emailconfig");
const {
  Verification_Email_Template,
  Welcome_Email_Template,
} = require("./emailTemplate");

const sendVerificationEmail = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
      from: `"InvestIQ" <${process.env.EMAIL_USER}>`,

      to: email, // list of receivers
      subject: "Verify your Email", // Subject line
      text: "Verify your Email", // plain text body
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      ),
    });
    console.log("Email send Successfully", response);
  } catch (error) {
    console.log("Email Error", error);
  }
};

const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: `"InvestIQ" <${process.env.EMAIL_USER}>`,

      to: email, // list of receivers
      subject: "Welcome Email", // Subject line
      text: "Welcome Email", // plain text body
      html: Welcome_Email_Template.replace("{name}", name),
    });
    console.log("Email send Successfully", response);
  } catch (error) {
    console.log("Email error", error);
  }
};

module.exports = { sendVerificationEmail, sendWelcomeEmail };



// TODO: Using Resend API for sending emails in future
// const { Resend } = require("resend");
// const {
//   Verification_Email_Template,
//   Welcome_Email_Template,
// } = require("./emailTemplate");

// const resend = new Resend(process.env.RESEND_API_KEY);

// const sendVerificationEmail = async (email, verificationCode) => {
//   try {
//     const response = await resend.emails.send({
//       // from: `"InvestIQ" <${process.env.EMAIL_USER}>`,
//       from: "InvestIQ <onboarding@resend.dev>",
//       to: email,
//       subject: "Verify your Email",
//       text: "Verify your Email",
//       html: Verification_Email_Template.replace(
//         "{verificationCode}",
//         verificationCode
//       ),
//     });
//     console.log("Email sent successfully", response);
//   } catch (error) {
//     console.log("Email Error", error);
//   }
// };

// const sendWelcomeEmail = async (email, name) => {
//   try {
//     const response = await resend.emails.send({
//       // from: `"InvestIQ" <${process.env.EMAIL_USER}>`,
//       from: "InvestIQ <onboarding@resend.dev>",
//       to: email,
//       subject: "Welcome Email",
//       text: "Welcome Email",
//       html: Welcome_Email_Template.replace("{name}", name),
//     });
//     console.log("Email sent successfully", response);
//   } catch (error) {
//     console.log("Email Error", error);
//   }
// };

// module.exports = { sendVerificationEmail, sendWelcomeEmail };
