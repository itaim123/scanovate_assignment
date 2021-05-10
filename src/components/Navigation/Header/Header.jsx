import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleDrawer } from '../../../redux/actions';
import settingsIcon from '../../../assets/settings.png';
import notificationsIcon from '../../../assets/notifications.png';
import logoIcon from '../../../assets/logo.png';
import userInitialsIcon from '../../../assets/user_initials.png';
import { countryCodes } from '../../../utils/countryCodes';

import HeaderLinks from './HeaderLinks/HeaderLinks';
import './Header.scss';
import IconComponent from '../../UIElements/IconComponent/IconComponent';
import Dropdown from '../../UIElements/Dropdown/Dropdown';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='header'>
      <div className='header_left'>
        <IconComponent withText='B-Trust' imgSrc={logoIcon} imgAlt='logoIcon' onClick={() => dispatch(toggleDrawer())} clickable />
        <HeaderLinks />
      </div>
      <div className='header_right'>
        <Dropdown keyValObj={countryCodes} />
        <IconComponent
          imgSrc={notificationsIcon}
          imgAlt='notificationsIcon'
          clickable />
        <IconComponent
          imgSrc={settingsIcon}
          imgAlt='settingsIcon'
          clickable />
        <IconComponent
          imgSrc={userInitialsIcon}
          imgAlt='userInitialsIcon'
          clickable />
      </div>
    </div>
  );
};

export default Header;
