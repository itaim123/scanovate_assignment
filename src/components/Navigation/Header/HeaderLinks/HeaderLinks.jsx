import React, { useState } from 'react';

import HeaderLink from '../HeaderLink/HeaderLink';

import './HeaderLinks.scss';
import { updateLinksArray } from '../../../../utils/utils';
import { linksArray } from './linksArray';

const HeaderLinks = () => {
  const [links, setLinks] = useState(linksArray)

  const setLinkActive = linkName => setLinks(updateLinksArray(linkName, links));

  return (
    <div className='headerLinks'>
      {links.map(link => (
        <HeaderLink key={link.name} title={link.name} active={link.active} makeActive={() => setLinkActive(link.name)} />
      ))}
    </div>
  );
};

export default HeaderLinks;
