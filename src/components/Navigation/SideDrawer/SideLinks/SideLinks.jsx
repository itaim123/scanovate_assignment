import React, { useState } from 'react';
import { sideLinksArray } from './linksArray';
import SideLink from '../SideLink/SideLink';
import { updateLinksArray } from '../../../../utils/utils'
import './SideLinks.scss';

const SideLinks = () => {
  const [sideLinks, setSideLinks] = useState(sideLinksArray);
  const setActive = linkName => setSideLinks(updateLinksArray(linkName, sideLinks));

  return (
    <div className='sideLinks'>
      {sideLinks.map(link => (
        <SideLink
          key={link.name}
          quantity={link.quantity}
          active={link.active}
          setActive={()=>setActive(link.name)}
          >
          {link.name}
        </SideLink>
      )
      )}
    </div>
  )
};

export default SideLinks;