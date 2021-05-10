import React from 'react';
import SingleSquare from './SingleSquare/SingleSquare';
import './Square.scss';

const Square = ({ squareData, size }) => {
  const squareKeys = Object.keys(squareData);
  return (

    <div className='square'>
      {squareKeys.map(square => <SingleSquare
        key={square} title={square} content={squareData[square]} />)}
    </div>
  );
};

export default Square;
