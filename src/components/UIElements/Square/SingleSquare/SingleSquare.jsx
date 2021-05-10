import React from 'react';
import Flag from '../../Flag/Flag';
import Approval from '../../Approval/Approval';
import { countryCodes } from '../../../../utils/countryCodes';

import './SingleSquare.scss';

const singleSquare = ({ title, content }) => {
  let flag;
  if (typeof content === 'string') {
    const countryKeys = Object.keys(countryCodes);
    for(let country of countryKeys){
      if(content.includes(country)){
        flag = <Flag code={countryCodes[country]} />
      }
    }
  }
  // Get the icons if boolean
  content = content === true ? <Approval approved /> : content === false ? <Approval /> : content;

  return (
    <div className='singleSquare'>
      <div className='square_title'>{title.toUpperCase()}</div>
      <div className='square_content'>{flag}{content}</div>
    </div>
  );
};

export default singleSquare;
