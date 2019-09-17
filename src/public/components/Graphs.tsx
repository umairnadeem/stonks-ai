import React from 'react';
import { Stock } from '../_types';
import LineGraph from 'react-line-graph';

const Graphs = ({ stocks }) => {
  return (
    <div>
      {stocks.map(({ ticker, data }) => (
        <LineGraph key={ticker} data={data} />
      ))}
    </div>
  );
};

export default Graphs;
