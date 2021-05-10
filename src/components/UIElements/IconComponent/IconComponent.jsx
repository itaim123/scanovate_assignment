import React from 'react';

import './IconComponent.scss';

const IconComponent = ({ onClick, imgSrc, imgAlt, withText, clickable }) => (
  <>
    <img className={`iconComponent ${clickable ? 'clickable' : ''}`}
      onClick={onClick && onClick}
      src={imgSrc}
      alt={imgAlt} />
    {withText && <span>{withText}</span>}
  </>
);

export default IconComponent;
