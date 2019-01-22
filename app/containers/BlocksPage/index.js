import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getBlocksRequest } from './actions';
import { selectBlocks } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BlocksPage from './BlocksPage';

const mapDispatchToProps = (dispatch) => ({
  getBlockList: () => dispatch(getBlocksRequest())
});

const mapStateToProps = createStructuredSelector({
  blocks: selectBlocks()
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
)(BlocksPage);
