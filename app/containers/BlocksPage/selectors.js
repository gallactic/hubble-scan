import { createSelector } from 'reselect';

const selectBlockList = (state) => state.get('blocks');

const selectBlocks = () => createSelector(
  selectBlockList,
  (accountState) => accountState.get('blocks')
);

export {
  selectBlockList,
  selectBlocks,
};
