import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <div className='lg:container mx-auto'>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
};

export default App;