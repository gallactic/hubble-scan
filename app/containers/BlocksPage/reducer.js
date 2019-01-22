import { fromJS } from 'immutable';

import { GET_BLOCK_LIST_SUCCESS } from './constants';

const initialState = fromJS({
  blocks: []
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCK_LIST_SUCCESS:
      return state.set('blocks', action.data);
    default:
      return state;
  }
}

export default homeReducer;
