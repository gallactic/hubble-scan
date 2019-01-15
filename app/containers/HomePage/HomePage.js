/* eslint-disable react/prefer-stateless-function */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Announcement from '../../components/molecules/Announcement';
import BlockList from '../../components/organisms/BlockListWidget';
import MarketInfo from '../../components/organisms/MarketInfoWidget';
// import PriceGraph from '../../components/organisms/PriceGraph';

import './style.scss';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getBlocks();
    this.props.getInfo();
  }

  render() {
    const { classes, blocks, infoData, blockInfo } = this.props;
    const info = [
      {
        name: 'Chain Name',
        value: infoData.chainName
      },
      {
        name: 'Chain Id',
        value: infoData.chainId
      },
      {
        name: 'Genesis Hash',
        value: infoData.genesisHash,
        trunc: true
      },
      {
        name: 'Genesis Time',
        value: moment(infoData.genesisTime).format('h:mm:ss a, Do MMM YYYY')
      }
    ];
    const blockInfoData = [
      {
        name: 'Accounts',
        value: infoData.accounts ? infoData.accounts.length : 0
      },
      {
        name: 'Validators',
        value: infoData.validators ? infoData.validators.length : 0
      },
      {
        name: 'Latest Block',
        value: blockInfo.latestBlockNumber
      },
      {
        name: 'Latest Block Time',
        value: blockInfo.latestBlockTime
          ? moment(blockInfo.latestBlockTime / 1000000).format(
              'h:mm:ss a, Do MMM YYYY'
            )
          : ''
      }
    ];
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HubbleScan application homepage" />
        </Helmet>
        <div className="home-page">
          <div className={classes.root}>
            <Announcement />
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <MarketInfo data={info} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MarketInfo data={blockInfoData} />
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <BlockList blocks={blocks} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <BlockList blocks={[]} />
              </Grid>
            </Grid>
          </div>
        </div>
      </article>
    );
  }
}

const styles = theme => {
  const padding = theme.spacing.unit * 2;
  return {
    root: {
      flexGrow: 1,
      padding
    },
    announcement: {
      paddingBottom: padding,
      fontSize: 14
    },
    paper: {
      height: 140
    },
    control: {
      padding
    },
    card: {
      padding: 20
    },
    graphCard: {
      paddingTop: 10,
      width: '100%',
      height: '100%'
    },
    media: {
      height: 140
    }
  };
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
