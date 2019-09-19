import React from 'react';
import { Stock } from '../_types';
import LineGraph from 'react-line-graph';
import { Container, Main } from './styled';

const Graphs = ({ stocks }) => {
  return (
    <Main>
      {stocks.map(({ ticker, data }) => (
        <Container key={ticker}>
          <LineGraph data={data} smoothing="0.4" hover={true} />
        </Container>
      ))}
    </Main>
  );
};

export default Graphs;
