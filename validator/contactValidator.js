const {body} = require('express-validator');

const contactValidator = [
    body('name', "The name must be of minimum 3 characters in length")
    .notEmpty()
    .isLength({ min: 3}),
    body('email', "Invalid Email Address")
    .notEmpty()
    .isEmail(),
    body('mobile_number', "Mobile number must be of 10 digits")
    .isLength(10),
    body('message', "message cannot exceed 100 characters")
    .isLength(100)
];

module.exports = {contactValidator};