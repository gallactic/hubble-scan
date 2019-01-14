/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, List } from 'immutable';

import { GET_BLOCKS_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  blocks: []
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCKS_SUCCESS:
      return state.set('blocks', action.data);
    default:
      return state;
  }
}

export default homeReducer;
