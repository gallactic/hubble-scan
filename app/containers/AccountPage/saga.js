/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_VALIDATOR_REQUEST } from './constants';
import { getValidatorSuccess } from './actions';

import request from 'utils/request';

export function* getValidators() {
  const requestURL = 'Validators';
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    if (result) {
      yield put(getValidatorSuccess(result.Validators));
    } else {
      yield put(getValidatorSuccess([]));
    }
  } catch (err) {
    console.log(err);
    yield put(getValidatorSuccess([]));
  }
}

export default function* githubData() {
  yield takeLatest(GET_VALIDATOR_REQUEST, getValidators);
}
