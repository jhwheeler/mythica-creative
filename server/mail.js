const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.email,
    pass: process.env.emailpw
  }
});

const mailOptions = (from, to, subject, text, html) => ({
  from,
  to,
  subject,
  text,
  html,
});

const sendEmail = (options, cb) => {
  transporter.sendMail(options, (error, info) => {
    if(error) {
      console.log(error);
    } else {
      console.log('Message %s sent: %s', info.messageId, info.reponse);
    };
  });
};

const sendBlueprint = (email, userId, name) => {
  const link = `http://localhost:7498/answers/${userId}`;

  const subject = "Here's your Brand Blueprint!";

  const text = `
    Dear ${name},
    Congratulations on completing our Brand Launch Quiz!
    Now we've integrated the info you gave us with some handy tips and tricks to grow your brand and connect with your audience in the best way possible.
    You can find your Brand Blueprint here: localhost:7498/answers/${userId}. Inside, you'll find some exercises to refine and develop your mission and vision statements, your buyer personas, and more.
    Once you've had a chance to take a look, send us a message with your feedback! We'd love to know how we can help you more.
    Best Regards,
    Jackson Holiday Wheeler
    www.mythicacreative.com
  `;

  const html = `
    <h3>Your Brand Blueprint</h3>
    <p>Dear ${name},</p>
    <p>Congratulations on completing our Brand Launch Quiz!</p>
    <p>Now we've integrated the info you gave us with some handy tips and tricks to grow your brand and connect with your audience in the best way possible.</p>
    <p>You can find your Brand Blueprint here: <a href="http://localhost:7498/answers/${userId}">Your Brand Blueprint</a>. Inside, you'll find some exercises to refine and develop your mission and vision statements, your buyer personas, and more.</p>
    <p>Once you've had a chance to take a look, send us a message with your feedback! We'd love to know how we can help you more.</p>
    <p>Best Regards,</p>
    <p>Jackson Holiday Wheeler</p>
    <p><a href="www.mythicacreative.com">Mythica Creative</a></p>
  `;

  const options = mailOptions('"Jackson Holiday Wheeler" <jhwheeler@gmail.com>', email, subject, text, html);

  sendEmail(options);
}

module.exports = {sendBlueprint};
