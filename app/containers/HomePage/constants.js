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

export const GET_INFO_REQUEST = 'hubblescan/Home/GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'hubblescan/Home/GET_INFO_SUCCESS';

export const GET_BLOCKS_REQUEST = 'hubblescan/Home/GET_BLOCKS_REQUEST';
export const GET_BLOCKS_SUCCESS = 'hubblescan/Home/GET_BLOCKS_SUCCESS';
export const GET_BLOCK_INFO_SUCCESS = 'hubblescan/Home/GET_BLOCK_INFO_SUCCESS';
export const GET_TXNS_SUCCESS = 'hubblescan/Home/GET_TXNS_SUCCESS';
