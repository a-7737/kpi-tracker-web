import { fromJS } from 'immutable';
import {
  CHANGE_VALUE, SET_VALID, SET_INVALID, VALIDATE, SUBMITTED, SUBMITTING, SUBMIT_FAILURE, SUBMIT_SUCCESS
} from './constants';

const initialFieldState = {
  value: '',
  validated: true,
  validating: false,
  errors: [],
};

const initialState = fromJS({
  fields: {
    userName: { ...initialFieldState },
    password: { ...initialFieldState }
  },
  valid: false,
});




function handleField(state, action) {

  //console.log(state[0]);
  switch (action.type) {
    case VALIDATE: {
      return {
        ...state,
        validated: false,
        validating: true,
        errors: [],
      };
    }
    case CHANGE_VALUE: {
      const { value } = action;
      return {
        ...state,
        value,
      };

    }
    case SET_INVALID: {
      const { error } = action;
      return {
        ...state,
        validating: false,
        validated: true,
        errors: state.errors.concat(error),
      };
    }
    case SET_VALID: {
      const { error } = action;
      return {
        ...state,
        validating: false,
        validated: true,
        errors: state.errors.filter((e) => e !== error),
      };
    }

    default:
      return state;
  }
}


export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
    case SET_VALID:
    case SET_INVALID:
    case VALIDATE:
      const { field } = action;
      const handledField = handleField(state.toJS().fields[field], action);
      const fields = state.get('fields').set(field, handledField);
      const valid = Object.keys(fields.toJS())
        .every((name) => fields.toJS()[name].errors.length === 0);

      return state
        .set('fields', fields)
        .set('valid', valid);

    case SUBMITTING:
      return state
        .set('submitting', true);

    case SUBMITTED:
      return state
        .set('submitting', false)
        .set('submitted', true);
    case SUBMIT_FAILURE:
      return state
        .set('submitting', true)
        .set('submitted', true)
        .set('statusText', action.err.message)
        .set('status', true)
        .set('valid', false);
    case SUBMIT_SUCCESS:
      return state
        .set('submitting', false)
        .set('statusText', 'Submitted successfully!')
        .set('valid', true);
    default:
      return state;
  }
}