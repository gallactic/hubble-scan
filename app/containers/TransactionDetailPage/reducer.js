import { fromJS } from 'immutable';

import {
  GET_TX_DETAIL_ERROR,
  GET_TX_DETAIL_REQUEST,
  GET_TX_DETAIL_SUCCESS
} from './constants';

const initialState = fromJS({
  block: null,
  txns: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TX_DETAIL_ERROR:
      return state.set('txn', null);
    case GET_TX_DETAIL_REQUEST:
      return state.set('txn', null);
    case GET_TX_DETAIL_SUCCESS:
      return state.set('txn', action.data);
    default:
      return state;
  }
}

export default homeReducer;
