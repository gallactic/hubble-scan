/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class TransactionDetailPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { match } = this.props;
    return (
      <div className="transaction-detail-page">
        <Helmet>
          <title>Transaction Detail Page</title>
          <meta name="description" content="Transaction Detail Page" />
        </Helmet>
        <div>
          <h1>Transaction Detail Page</h1>
          <div>
            <p>Tx details of {match.params.id}</p>
          </div>
        </div>
      </div>
    );
  }
}
