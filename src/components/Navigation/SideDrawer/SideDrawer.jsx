import React from 'react';
import { useSelector } from 'react-redux';
import SideLinks from './SideLinks/SideLinks';
import InitialData from './InitialData/InitialData';
import './SideDrawer.scss';

const SideDrawer = () => {
  const showDrawer = useSelector(state=>state.showDrawer);
  console.log(showDrawer, 'show')
  return (
    <div className={`sideDrawer ${showDrawer ? 'showDrawer' : ''}`}>
      <InitialData />
      <SideLinks />
    </div>
  );
};

export default SideDrawer;