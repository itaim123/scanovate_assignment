import React from 'react';
import { capitalize } from '../../../../utils/utils';

import './HeaderLink.scss';

const HeaderLink = ({ title, active, makeActive }) => (
  <div
    className={`headerLink ${active ? 'active' : ''}`}
    onClick={makeActive}>
    {capitalize(title)}
  </div>
);

export default HeaderLink;
