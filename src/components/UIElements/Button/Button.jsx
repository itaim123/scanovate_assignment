import React from 'react';

import './Button.scss';

const Button = ({ children, onClick }) => (
    <div className='button' onClick={onClick}>
      {children}
    </div>
  );

export default Button;