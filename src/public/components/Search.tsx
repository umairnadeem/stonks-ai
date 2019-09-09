import React, { useContext } from 'react';
import { useForm } from '../_hooks';
import { Store } from '../_types';

interface Props {
  Context: React.Context<Store>;
}

const Search: React.FC<Props> = (props: Props) => {
  const [query, setQuery] = useForm({ q: '' });
  const [stocks, dispatch] = useContext(props.Context).stocks;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'STOCKS_ADD',
      payload: [{ ticker: 'bruh', data: [[1, 2]], color: '', accent: '' }]
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='search'
        name='query'
        onChange={setQuery}
        placeholder='Type a ticker'
      />
      {JSON.stringify(stocks)}
    </form>
  );
};

export default Search;
