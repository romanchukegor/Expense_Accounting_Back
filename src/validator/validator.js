const { check, validationResult } = require("express-validator");

exports.taskValidator = [
  check("text")
    .trim()
    .isString()
    .notEmpty()
    .withMessage("The field must be not empty !!!"),
  
  check("date")
    .trim()
    .isEmpty()
    .isString()
    .withMessage("Indvalid field input"),

  check("cost")
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage("field must contain only numbers")
  
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }

  next();
};
