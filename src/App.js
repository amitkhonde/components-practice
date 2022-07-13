import React from 'react';

import { FaBeer } from 'react-icons/fa';

import Icon from './components/Icon';

function App() {
  return (
    <div>
      <h1>Components Practice</h1>
      <Icon disabled>
        <FaBeer />
      </Icon>
    </div>
  );
}

export default App;
