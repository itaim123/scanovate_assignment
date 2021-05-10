import React from 'react';
import loaderSvg from '../../../assets/loader.svg';

import './Loader.scss';

const Loader = (props) => {
  return (
    <div className='loader'>
      <img src={loaderSvg} alt="loader" />
    </div>
  );
};

export default Loader;