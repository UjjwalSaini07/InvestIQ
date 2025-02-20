const Verification_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
      <style>
          body {
              font-family: 'Poppins', Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f0f4f8;
              color: #333;
          }
          .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 15px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              overflow: hidden;
          }
          .header {
              background: linear-gradient(135deg, #4cafef, #1976d2);
              color: white;
              padding: 25px 20px;
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              letter-spacing: 1px;
          }
          .content {
              padding: 30px;
              font-size: 16px;
              line-height: 1.8;
              color: #555;
          }
          .verification-code {
              display: block;
              margin: 20px auto;
              font-size: 22px;
              color: #4cafef;
              background: #e3f2fd;
              border: 1px dashed #4cafef;
              padding: 12px;
              text-align: center;
              border-radius: 8px;
              font-weight: bold;
              letter-spacing: 2px;
              width: fit-content;
          }
          .footer {
              background-color: #f9f9f9;
              padding: 20px;
              text-align: center;
              color: #777;
              font-size: 14px;
              border-top: 1px solid #e0e0e0;
          }
          p {
              margin: 0 0 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Verify Your Email || InvestIQ</div>
          <div class="content">
              <p>Hello,</p>
              <p>Thank you for signing up! Please confirm your email address by entering the code below:</p>
              <span class="verification-code">{verificationCode}</span>
              <p>If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team.</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} InvestIQ. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;

const Welcome_Email_Template = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to InvestIQ</title>
    <style>
        body {
            font-family: 'Poppins', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8;
            color: #333;
        }
        .container {
            max-width: 700px;
            margin: 50px auto;
            background: #ffffff;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #4cafef, #1976d2);
            color: white;
            padding: 30px 20px;
            text-align: center;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 1px;
        }
        .content {
            padding: 35px;
            line-height: 1.7;
            font-size: 16px;
            color: #555;
        }
        .welcome-message {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #222;
        }
        ul {
            margin: 20px 0;
            padding-left: 20px;
            list-style: disc;
        }
        ul li {
            margin-bottom: 15px;
            color: #666;
        }
        .button {
            display: block;
            width: max-content;
            margin: 25px auto 0;
            padding: 12px 40px;
            background-color: #4cafef;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 6px 12px rgba(76, 175, 239, 0.2);
        }
        .button:hover {
            background-color: #1976d2;
            box-shadow: 0 8px 20px rgba(76, 175, 239, 0.3);
            transform: translateY(-2px);
        }
        .footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            color: #777;
            font-size: 14px;
            border-top: 1px solid #e0e0e0;
        }
        .footer a {
            color: #4cafef;
            text-decoration: none;
            font-weight: 600;
        }
        .footer a:hover {
            text-decoration: underline;
        }
        p {
            margin: 0 0 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Welcome to InvestIQ!</div>
        <div class="content">
            <p class="welcome-message">Hello <strong>{name}</strong>,</p>
            <p>We’re excited to welcome you to InvestIQ, your trusted platform for smarter financial decisions. Here, you can discover tools, resources, and insights tailored to your unique financial journey.</p>
            <p>Start exploring now to unlock a wealth of opportunities:</p>
            <ul>
                <li>Analyze and manage your investments with ease.</li>
                <li>Access exclusive insights and market trends.</li>
                <li>Compare different cryptocurrencies effectively.</li>
                <li>Stay updated with the latest business and stock market news.</li>
            </ul>
            <a href="#" class="button">Get Started</a>
            <br/>
            <p>If you have any questions or need guidance, our support team is just a click away. Let’s embark on this journey to financial success together!</p>
        </div>
        <div class="footer">
            <p>&copy; <script>document.write(new Date().getFullYear());</script> InvestIQ. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

module.exports = { Verification_Email_Template, Welcome_Email_Template };
