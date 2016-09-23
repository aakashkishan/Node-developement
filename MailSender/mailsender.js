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
        user: 'vaakashkishan',
        pass: 'NarayaNaN93'
    }
} ));

// Setup e-mail data like from & to addresses, subject and text with unicode symbols
var mailOptions = {
    from: '"aakash kishan Vinjamur" <vaakashkishan@gmail.com>', // sender address
    to: 'vaakashkishan@gmail.com', // receiver address list
    subject: 'Test Mail ✔', // Subject of the email
    text: 'Hello, Text Check?', // plaintext body
    attachments: [
   		{   // File on disk as an attachment
            filename: 'file.txt',
            path: './file.txt' // stream this file
        }
        {   // Filename and content type is derived from path as an attachment
            path: '/path/to/file.txt'
        },
        {   // Stream as an attachment
        	// Use this when large amount of data need to be attached 
            filename: 'file.txt',
            content: fs.createReadStream('file.txt')
        },
    ],
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
