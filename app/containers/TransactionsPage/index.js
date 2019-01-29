import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getBlocksRequest } from './actions';
import { selectBlocks, selectLastBlock } from './selectors';
import reducer from './reducer';
import saga from './saga';
import TransactionsPage from './TransactionsPage';

const mapDispatchToProps = dispatch => ({
  getBlockList: (lastBlock, rowsPerPage) =>
    dispatch(getBlocksRequest({ lastBlock, rowsPerPage }))
});

const mapStateToProps = createStructuredSelector({
  blocks: selectBlocks(),
  lastBlock: selectLastBlock()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'blocks', reducer });
const withSaga = injectSaga({ key: 'blocks', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(TransactionsPage);
