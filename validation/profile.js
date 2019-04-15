const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.location = !isEmpty(data.location) ? data.location : "";
  if (!Validator.isLength(data.location, { min: 0, max: 1000 })) {
    errors.location = "location needs to between 1 and 4 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
