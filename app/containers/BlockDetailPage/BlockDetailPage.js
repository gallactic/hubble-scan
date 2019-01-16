/*
 * BlockDetail
 *
 * Block details
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import MarketInfo from '../../components/organisms/MarketInfoWidget';

import './style.scss';

export default class BlockDetailPage extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const blockId = match.params.id;
    console.log(blockId);
    this.props.getBlocks(blockId);
  }

  render() {
    const { match, block } = this.props;
    console.log('BlockDetailPage', block);
    const info = [
      {
        name: 'Block Number',
        value: '37667143'
      },
      {
        name: 'Validator Hash',
        value:
          '023ec147eb965d84efc837d6ad3a7022ce98f661c65e4486e229c0e4d76fe5ea',
        trunc: true
      },
      {
        name: 'Timestamp',
        value: 'Jan 16, 2019, 11:30:53.500 AM'
      },
      {
        name: 'Block ID',
        value:
          '4fe4932a6bd08a7d0db6a4d1253dff602eba3e099b0ee9ff10ab28272d080843',
        trunc: true
      },
      {
        name: 'Previous Block ID',
        value:
          'dd54938facc358a137c7d3e69a6d4b40780a4d4ca12d02c84b3af899cf0ff3c5',
        trunc: true
      },
      {
        name: 'Number of Transactions',
        value: '0'
      },
      {
        name: 'Validators Hash',
        value:
          '0FCFC35329A6C63B55FDB549B719C4814EE73503E0CD8E076E0B3E72FFF39DA3',
        trunc: true
      },
      {
        name: 'Consensus Hash',
        value:
          '9C1DF90B8DC54EA4F85E4B42794C20BCEFD44A75043EBE7509EDB720ADF22F23',
        trunc: true
      }
    ];

    return (
      <div className="block-detail-page">
        <Helmet>
          <title>BlockDetail Page</title>
          <meta name="description" content="BlockDetail Page" />
        </Helmet>
        <div>
          <Grid container spacing={24} justify="center">
            <Grid item xs={12} sm={10}>
              <MarketInfo data={info} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
