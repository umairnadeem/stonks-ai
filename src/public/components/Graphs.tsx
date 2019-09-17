import React from 'react';
import { Stock } from '../_types';
import LineGraph from 'react-line-graph';

const Graphs = ({ stocks }) => {
  return (
    <div>
      {stocks.map(({ ticker, data }) => (
        <LineGraph key={ticker} data={data} smoothing="0.4" hover={true}/>
      ))}
    </div>
  );
};

export default Graphs;
