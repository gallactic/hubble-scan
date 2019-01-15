import { fromJS } from 'immutable';

import { GET_VALIDATOR_SUCCESS } from './constants';

const initialState = fromJS({
  validators: []
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VALIDATOR_SUCCESS:
      return state.set('validators', action.data);
    default:
      return state;
  }
}

export default homeReducer;
