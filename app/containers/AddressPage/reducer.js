import { fromJS } from 'immutable';

import {
  GET_ADDRESS_DETAIL_ERROR,
  GET_ADDRESS_DETAIL_SUCCESS,
  GET_ADDRESS_DETAIL_REQUEST,
  // GET_ADDRESS_TX_ERROR,
  // GET_ADDRESS_TX_SUCCESS,
  // GET_ADDRESS_TX_REQUEST
} from './constants';

const initialState = fromJS({
  account: null,
  txns: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_DETAIL_ERROR:
      return state.set('account', null);
    case GET_ADDRESS_DETAIL_REQUEST:
      return state.set('account', null);
    case GET_ADDRESS_DETAIL_SUCCESS:
      return state.set('account', action.data);
    // case GET_ADDRESS_TX_REQUEST:
    //   return state.set('accountTx', null);
    // case GET_ADDRESS_TX_ERROR:
    //   return state.set('accountTx', null);
    // case GET_ADDRESS_TX_SUCCESS:
    //   return state.set('accountTx', action.data);
    default:
      return state;
  }
}

export default homeReducer;
