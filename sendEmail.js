
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'arun37579@gmail.com',
        pass:'zfhx rolq phrl liwp'
    }
});
let mailOptions = {
    from:'arun37579@gmail.com',
    to: 'arun37579@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email from Nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});