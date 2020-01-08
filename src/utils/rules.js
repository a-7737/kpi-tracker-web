import { isEmail, matches, isNumeric, isAlphanumeric, isEmpty } from 'validator';

const minLength = {
  test: (val, threshold) => val.length + 1 > parseInt(threshold, 10),
  message: (val, threshold) => `Must be contain atleast ${threshold} characters.`,
};
const codeMinlength = {
  test: (val, threshold) => val.length + 1 > parseInt(threshold, 10),
  message: () => 'invalid code.',
};
const codeMaxlength = {
  test: (val, threshold) => parseInt(threshold, 10) > val.length,
  message: () => 'invalid code',
};
const maxLength = {
  test: (val, threshold) => val.length + 1 < parseInt(threshold, 10),
  message: (val, threshold) => `Must be contain atleast ${threshold} characters`,
};
const isNumber = {
  test: isNumeric,
  message: 'Invalid input',
};
const isAlphaNum = {
  test: isAlphanumeric,
  message: 'Alphabets and numbers allowed',
};
const checkEmpty = {
  test: (val, field) => val !== '',
  message: 'Filed should not be empty',
};

const email = {
  test: isEmail,
  message: 'Please input a valid email address.',
};

const doesNotMatch = {
  test: (val, str) => !matches(val, str),
  message: (_, str) => `Your password should not contain the phrase "${str}."`,
};

export default {
  doesNotMatch,
  minLength,
  email,
  codeMaxlength,
  codeMinlength,
  maxLength,
  isNumber,
  isAlphaNum,
  checkEmpty,
};
