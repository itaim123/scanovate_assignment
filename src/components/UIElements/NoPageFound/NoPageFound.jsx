import React from 'react';
import notFoundIcon from '../../../assets/404.png';
import './NoPageFound.scss';

const NoPageFound = () => (
    <div className='noPageFound'>
      <img src={notFoundIcon} alt="404" />
      <span>404 - No Page Was Found</span>
    </div>
  );

export default NoPageFound;
