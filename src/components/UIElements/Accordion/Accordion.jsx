import React, { useState } from 'react';

import { cardIsbutton } from './cardIsButton';
import Card from '../Card/Card';
import './Accordion.scss';

const Accordion = ({ title, data }) => {
  const [collapse, setCollapse] = useState(true);
  const keysArray = Object.keys(data);

  return (
    <div className='accordion'>
      <div className='accordion_title' onClick={() => setCollapse(!collapse)}>{title.toUpperCase()}
      <span className={`${!collapse ? 'rotate' : ''}`}>˅</span>
      </div>
      <div className={`accordion_content ${collapse ? 'collapse' : ''}`}>
        {keysArray.map(card => {
          let viewMode = Array.isArray(data[card]) ? 'table' : 'square';
          return (
            <Card key={card} title={card} data={data[card]} mode={viewMode} isButton={cardIsbutton[card]} />)
        }
        )}
      </div>

    </div>
  );
};

export default Accordion;
