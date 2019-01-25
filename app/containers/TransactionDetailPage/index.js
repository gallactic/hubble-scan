import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getTxRequest } from './actions';
import { selectTx } from './selectors';
import reducer from './reducer';
import saga from './saga';
import TransactionDetailPage from './TransactionDetailPage';

const mapDispatchToProps = dispatch => ({
  getTxnInformation: txId => dispatch(getTxRequest(txId))
});

const mapStateToProps = createStructuredSelector({
  txn: selectTx()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'txDetail', reducer });
const withSaga = injectSaga({ key: 'txDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(TransactionDetailPage);
