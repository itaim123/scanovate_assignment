import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawer } from '../../../redux/actions';

import './Backdrop.scss';

const Backdrop = () => {
  const dispatch = useDispatch();
  const showDrawer = useSelector(state => state.showDrawer);
  
  return <div onClick={()=>dispatch(toggleDrawer())} className={`backdrop ${showDrawer ? 'showBackdrop' :''}`}></div>
};
export default Backdrop;