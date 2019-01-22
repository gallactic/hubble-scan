import { fromJS } from 'immutable';

import { GET_BLOCK_LIST_SUCCESS, SET_LAST_BLOCK } from './constants';

const initialState = fromJS({
  blocks: [],
  lastBlock: 0
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCK_LIST_SUCCESS:
      return state.set('blocks', action.data);
    case SET_LAST_BLOCK:
      return state.set('lastBlock', action.data);
    default:
      return state;
  }
}

export default homeReducer;
