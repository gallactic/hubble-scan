import { fromJS } from 'immutable';

import {
  GET_BLOCK_DETAIL_ERROR,
  GET_BLOCK_DETAIL_REQUEST,
  GET_BLOCK_DETAIL_SUCCESS,
  GET_BLOCK_TX_REQUEST,
  GET_BLOCK_TX_SUCCESS,
  GET_BLOCK_TX_ERROR
} from './constants';

const initialState = fromJS({
  block: null,
  txns: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCK_DETAIL_ERROR:
      return state.set('block', null);
    case GET_BLOCK_DETAIL_REQUEST:
      return state.set('block', null);
    case GET_BLOCK_DETAIL_SUCCESS:
      return state.set('block', action.data);
    case GET_BLOCK_TX_REQUEST:
      return state.set('blockTx', null);
    case GET_BLOCK_TX_ERROR:
      return state.set('blockTx', null);
    case GET_BLOCK_TX_SUCCESS:
      return state.set('blockTx', action.data);
    default:
      return state;
  }
}

export default homeReducer;
