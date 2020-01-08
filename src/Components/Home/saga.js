import { VALIDATE, SUBMIT, SUBMITTED } from "./constants";
import { put, select, call, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import createValidator from '../../utils/createValidator';
import { fromJS } from 'immutable';
import { push } from 'react-router-redux';
import { createBrowserHistory } from 'history';



import {
  setValid,
  setInvalid,
  setSubmitting,
  setSubmitted,
  validate,

} from './actions';
import { func } from "prop-types";

function* handleValidate(action) {
  // console.log('here');
  const { validation, field } = action;

  // console.log(validation);
  // console.log(Array.isArray(validation));

  // If given an array of validation rules, we can yield a parallel saga to
  // recursively call the `handleValidate` saga with the individual validation
  if (Array.isArray(validation)) {
    yield validation.map((v) => call(handleValidate, {
      ...action,
      validation: v,
    }));

    // Return so that when the above parallel saga comes back we don't
    // continue on
    return;
  }

  // Construct the validator object with the supplied validation
  const validator = yield call(createValidator, validation);
  // console.log(validator);

  // Grab the current value from the state

  const value = yield select((state) => state.HomeReducer.toJS().fields[field].value);

  // console.log('value');
  // console.log(value, validator.test);
  // console.log(state);

  try {
    // Test to see if the value is valid
    // This will work even if the test returns a Promise because redux-saga
    // will wait for it to resolve.
    const valid = yield call(validator.test, value);
    // console.log(valid);

    // Grab the potential here so that we can remove it if needed
    const error = validator.report(value);

    if (valid) {
      yield put(setValid(field, error));
    } else {
      yield put(setInvalid(field, error));
    }
  } catch (e) {
    // Async error
    console.log(e);
  }
}

function* handleSubmit(action) {
  const { validations, handler } = action;
  const state = yield select((state) => state);
  // Before submitting, find any fields that have not yet been validated so
  // that we can validate them.
  const fieldsNotValidated = Object.keys(state.HomeReducer.toJS().fields).reduce((notValidated, name) => {
    const field = state.HomeReducer.toJS().fields[name];

    if (field.validated) {
      return notValidated;
    } else {
      return notValidated.concat(name);
    }
  }, []);

  // If there are unvalidated fields, yield a parallel saga and dispatch
  // actions to validaate each field
  if (fieldsNotValidated.length) {
    console.log('fieldsNotValidated');
    yield fieldsNotValidated.map(
      (name) => put(validate(name, validations[name])));
  } else {
    const values = Object.keys(state.HomeReducer.toJS().fields).reduce((vals, name) => {
      vals[name] = state.HomeReducer.toJS().fields[name].value;

      return vals;
    }, {});

    yield put(setSubmitting());

    yield put(setSubmitted(values, handler));
  }
}


function* handleSubmitted(action) {

  const { values, handler } = action;

  try {
    //api need to be connected
    // const user = yield call(Api.user.login, action.values)

    yield call(handler)

  } catch (error) {

  }
}



function* HomeSaga() {
  yield takeLatest(VALIDATE, handleValidate);
  yield takeLatest(SUBMITTED, handleSubmitted);
  yield takeLatest(SUBMIT, handleSubmit);
}

export default HomeSaga;
