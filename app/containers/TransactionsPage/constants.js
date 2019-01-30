/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_BLOCK_LIST_REQUEST = 'hubblescan/BlocksPage/GET_BLOCK_LIST_REQUEST';
export const GET_BLOCK_LIST_SUCCESS = 'hubblescan/BlocksPage/GET_BLOCK_LIST_SUCCESS';
export const SET_LAST_BLOCK = 'hubblescan/BlocksPage/SET_LAST_BLOCK';
