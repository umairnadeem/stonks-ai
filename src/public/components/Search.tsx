import React, { useContext } from 'react';
import { useForm } from '../_hooks';
import { Context } from '../_store';
import { ReducerHook } from '../_types';
import { submitForm } from '../_actions';
import Graphs from './Graphs';

interface Props {
 // TODO: fill me in
}
const Search: React.FC<Props> = (props) => {
  const [{ ticker }, setForm] = useForm({ ticker: '' });
  const [{ stocks }, dispatch] = useContext<ReducerHook>(Context);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(ticker, dispatch);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          name="ticker"
          onChange={setForm}
          placeholder="Type a ticker"
        />
      </form>
      <Graphs stocks={stocks} />
    </React.Fragment>
  );
};

export default Search;
