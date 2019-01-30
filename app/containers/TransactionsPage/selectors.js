import { createSelector } from 'reselect';

const selectBlockList = state => state.get('blocks');

const selectBlocks = () =>
  createSelector(
    selectBlockList,
    accountState => accountState.get('blocks')
  );

const selectLastBlock = () =>
  createSelector(
    selectBlockList,
    accountState => accountState.get('lastBlock')
  );

export { selectBlockList, selectBlocks, selectLastBlock };
