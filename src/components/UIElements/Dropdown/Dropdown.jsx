import React, { useState } from 'react';
import Flag from '../Flag/Flag';

import './Dropdown.scss';

const Dropdown = ({ keyValObj }) =>{
  const arrayFromObj = Object.keys(keyValObj);
  const [countryVal, setCountryVal] = useState(keyValObj[arrayFromObj[0]])

  return (
    <div className='dropdown'>
      <Flag code={countryVal} />
      <select 
      onChange={(e)=>setCountryVal(keyValObj[e.target.value])}>
        {arrayFromObj.map(name=><option key={name} val={keyValObj[name]}>{name}</option>)}
      </select>
  </div>
);
}


export default Dropdown;
