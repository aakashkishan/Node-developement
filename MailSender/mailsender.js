/*************************************************************	
*	A Simple General Mail Sender using the nodemailer module.
*
*	INPUT: a. smtp transport
*		   b. username
*		   c. password
* 		   d. from & to address
* 		   e. data to be sent
*
*	OUTPUT: Message sent: response.
*
*	With Gmail there is a problem of Gmail expecting the user
*	to be an actual user not a robot so it runs a lot of 
*	heuristics for every login attempt and blocks anything 
*	that looks suspicious (user without OAuth2).
*	Google classifies such suspicious users as Less Secure.
*	Hence the acceptance from less secure users must be 
*	permitted using this url:
*	https://support.google.com/accounts/answer/6010255?hl=en
*
**************************************************************/

// Include required node modules.
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// Create transporter object using the default SMTP transport
// The smtp transport is Google's smtp transport
// SMTP connections secured by SSL, known as SMTPS, default to port 465
var transporter = nodemailer.createTransport(smtpTransport( {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'userName',
        pass: 'passWord'
    }
} ));

// Setup e-mail data like from & to addresses, subject and text with unicode symbols
var mailOptions = {
    from: '"SenderEmailId" <sender@example.com>', // sender address
    to: 'recipient@example.com', // receiver address list
    subject: 'Test Mail ✔', // Subject of the email
    text: 'Hello, Text Check?', // plaintext body
    html: '<b>Hello world !</b>' // html body
};

// Pre mail send verification stage 
console.log("Your request is being processed!");

// send mail with defined transport object
transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        return console.log(err);
    }
    console.log('Message sent: ' + info.response);
});
