/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const selectBlocks = () => createSelector(
  selectHome,
  (homeState) => homeState.get('blocks')
);

export {
  selectHome,
  selectBlocks,
};
