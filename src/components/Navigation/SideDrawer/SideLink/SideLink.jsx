import React from 'react';
import { capitalize } from '../../../../utils/utils';
import { Link } from 'react-router-dom';
import Badge from '../../../UIElements/Badge/Badge';
import './SideLink.scss';

const SideLink = ({ children, quantity, setActive, active }) => {
  let link = `/pages/${children}`;
  link = children === 'data' ? '/' : link;
  return (
    <Link to={link}>
    <div className={`sideLink ${!!quantity ? 'withQuantity' : ''} ${active && 'active'}`}
      onClick={setActive}>
      <div className='sl_title'>
        {capitalize(children)}
      </div>
      {!!quantity && <Badge className='sl_qty' mode='fade'>{quantity}</Badge>}
    </div>
    </Link>
  )
};

export default SideLink;