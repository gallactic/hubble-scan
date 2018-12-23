/*
 * BlockDetail
 *
 * Block details
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class BlockDetailPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { match } = this.props;
    return (
      <div className="block-detail-page">
        <Helmet>
          <title>BlockDetail Page</title>
          <meta name="description" content="BlockDetail Page" />
        </Helmet>
        <div>
          <h1>BlockDetail Page</h1>
          <div>
            <p>Block details of {match.params.id}</p>
          </div>
        </div>
      </div>
    );
  }
}
