import React from 'react';
import Search from './Search';
import Store from '../_store';

interface Props {
  // add props
}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Store>
        <Search />
      </Store>
    </div>
  );
};

export default App;
