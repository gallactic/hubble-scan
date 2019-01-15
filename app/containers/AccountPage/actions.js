import {
  GET_VALIDATOR_REQUEST,
  GET_VALIDATOR_SUCCESS,
} from './constants';

export function getValidatorRequest() {
  return {
    type: GET_VALIDATOR_REQUEST
  };
}

export function getValidatorSuccess(validators) {
  return {
    type: GET_VALIDATOR_SUCCESS,
    data: validators
  };
}
