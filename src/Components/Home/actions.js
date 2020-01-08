import {
  CHANGE_VALUE, SET_VALID, SET_INVALID, VALIDATE, SUBMITTED, SUBMITTING, SUBMIT, SUBMIT_FAILURE, SUBMIT_SUCCESS
} from './constants';

/**
 * Change the value of a field to a new value
 */
export function changeValue(field, value) {
  return ({
    type: CHANGE_VALUE,
    field,
    value,
  });
}
/**
 *  Validate an individual field given a specific validation
 */
export function validate(field, validation) {
  return ({
    type: VALIDATE,
    field,
    validation,
  });
}

// Mark a field as invalid with a specific error message
export function setInvalid(field, error) {
  return ({
    type: SET_INVALID,
    field,
    error,
  });
}

// Mark the field as invalid with the error message to be removed
export function setValid(field, error) {
  return ({
    type: SET_VALID,
    field,
    error,
  });
}

// Submit the form
// We'll supply all of the validations for the form as well as a handler
// to call after the form has been validated
export function submit(validations, handler) {
  return ({
    type: SUBMIT,
    validations,
    handler,
  });
}

// Mark the form as submitting for display indication
export const setSubmitting = () => ({
  type: SUBMITTING,
});

// Mark the form as submitted for display indication
export const setSubmitted = (values, handler) => ({
  type: SUBMITTED,
  values,
  handler,
});

// Mark the form submitting failure
export const submitError = (err) => ({
  type: SUBMIT_FAILURE,
  err,
});

export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS,
});