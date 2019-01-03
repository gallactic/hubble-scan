import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const PriceGraph = ({ loading, error, repos, classes }) => {
  const data = [
    { name: '12/20/2018', uv: 4000, pv: 2400, amt: 2400 },
    { name: '12/21/2018', uv: 3000, pv: 1398, amt: 2210 },
    { name: '12/22/2018', uv: 2000, pv: 9800, amt: 2290 },
    { name: '12/23/2018', uv: 2780, pv: 3908, amt: 2000 },
    { name: '12/24/2018', uv: 1890, pv: 4800, amt: 2181 },
    { name: '12/25/2018', uv: 2390, pv: 3800, amt: 2500 },
    { name: '12/26/2018', uv: 3490, pv: 4300, amt: 2100 }
  ];
  return (
    <Card className={classes.graphCard}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10 }}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

PriceGraph.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};
const styles = () => {
  return {
    graphCard: {
      paddingTop: 10,
      width: '100%',
      height: '100%'
    }
  };
};
export default withStyles(styles)(PriceGraph);
