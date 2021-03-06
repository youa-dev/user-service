import isEmpty from "../helpers/isEmpty";
import { ILoginValidationError } from "../interfaces";
import { emailRegex } from "./regex";
import { authErrors } from "./errors";

const { EMAIL_EMPTY, EMAIL_INVALID, PASSWORD_EMPTY } = authErrors;

export default ({ email, password }) => {
  // Define an error object
  let errors: ILoginValidationError = {};
  // Email
  if (isEmpty(email)) errors.emailEmpty = EMAIL_EMPTY;
  if (!emailRegex.test(email)) errors.emailNotValid = EMAIL_INVALID;
  // Password
  if (isEmpty(password)) errors.passwordEmpty = PASSWORD_EMPTY;
  // Return errors if any, else return false.
  if (Object.keys(errors).length > 0) {
    return errors;
  } else {
    return false;
  }
};
