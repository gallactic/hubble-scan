/*
 * AddressPage
 *
 * Account details
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class AddressPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { match } = this.props;
    return (
      <div className="address-page">
        <Helmet>
          <title>Address Page</title>
          <meta name="description" content="Address Page" />
        </Helmet>
        <div>
          <h1>Address Page</h1>
          <div>
            <p>Account details of {match.params.id}</p>
          </div>
        </div>
      </div>
    );
  }
}
