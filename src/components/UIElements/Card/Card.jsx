import React from 'react';

import Table from '../Table/Table';
import Square from '../Square/Square';
import Button from '../Button/Button';

import { cardTitles } from './cardTitles.js';

import './Card.scss';

const Card = (props) => {
  let { title, mode, data, isButton } = props;
  title = cardTitles[title];

  // table \ square
  const cardContainer = mode === 'table' ?
    <Table tableData={data} /> :
    <Square squareData={data} />;

  return (
    <div className='card'>
      <div className={`title ${isButton ? 'isButton' : ''}`}><span>{title}</span>
      {isButton && <Button>{isButton}</Button>}
      </div>
      {cardContainer}
    </div>
  );
};

export default Card;
