/*
 * AccountPage
 *
 * List of all accounts
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.scss';

export default class AccountPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { match } = this.props;
    const tx =
      '0xa5a0cdd77295cbb78db7a81e50462b28cec10f17513e79b22901f42384020157';
    return (
      <div className="account-page">
        <Helmet>
          <title>Account Page</title>
          <meta name="description" content="Account Page" />
        </Helmet>
        <h1>Account lists</h1>
        <div>
          <Link to={`${match.url}/${tx}`}>{tx}</Link>
        </div>
      </div>
    );
  }
}
