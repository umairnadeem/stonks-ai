import React from 'react';
import { useForm } from '../_hooks';

interface Props {
  // add props
}

const Search: React.FC<Props> = (props: Props) => {
  const [query, setQuery] = useForm({ q: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
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
    </form>
  );
};

export default Search;
