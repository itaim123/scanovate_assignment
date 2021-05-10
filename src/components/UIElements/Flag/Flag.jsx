import React from 'react';
import Flag from 'react-world-flags';
import './Flag.scss';

const FlagElement = ({ code, size }) => (
  <Flag className={`flag ${size==='large' ? 'large' : ''}`} code={code} />
)

export default FlagElement;
