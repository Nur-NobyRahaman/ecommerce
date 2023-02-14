import { useRouter } from 'next/router';
import React from 'react';
import Home from '../Component/Home/Home';

const home = () => {
  return (
    <div>
      <Home myData={'Ecommerce Website'}></Home>
    </div>
  );
};

export default home;