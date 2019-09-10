import React, { useContext } from 'react';
import { useForm } from '../_hooks';
import { Context } from '../_store';
import { ReducerHook } from '../_types';
import { STOCKS } from '../_constants';

interface Props {
 // TODO: fill me in
}
const Search: React.FC<Props> = (props) => {
  const [{ ticker }, setQuery] = useForm({ ticker: '' });
  const [stocks, dispatch] = useContext<ReducerHook>(Context);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: STOCKS.ADD,
      payload: [{ ticker, data: [[1, 2]], color: '', accent: '' }]
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="search"
        name="ticker"
        onChange={setQuery}
        placeholder="Type a ticker"
      />
      {JSON.stringify(stocks)}
    </form>
  );
};

export default Search;
