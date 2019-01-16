import { fromJS } from 'immutable';

import {
  GET_BLOCK_DETAIL_ERROR,
  GET_BLOCK_DETAIL_REQUEST,
  GET_BLOCK_DETAIL_SUCCESS
} from './constants';

const initialState = fromJS({
  block: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCK_DETAIL_ERROR:
      return state.set('block', null);
    case GET_BLOCK_DETAIL_REQUEST:
      return state.set('block', null);
    case GET_BLOCK_DETAIL_SUCCESS:
      return state.set('block', action.data);
    default:
      return state;
  }
}

export default homeReducer;
