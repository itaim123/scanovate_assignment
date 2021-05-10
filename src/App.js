import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import NoPageFound from './components/UIElements/NoPageFound/NoPageFound';
import Backdrop from './components/UIElements/Backdrop/Backdrop';
import DataSections from './components/Sections/DataSections.jsx';
import Header from './components/Navigation/Header/Header';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Loader from './components/UIElements/Loader/Loader';

import { loadData } from './redux/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => dispatch(loadData(data)));
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <SideDrawer />
        <Switch>
          <Route path='/' exact component={DataSections} />
          <Route path='/pages/' component={NoPageFound} />
          <Redirect to='/' />
        </Switch>
      </div>
      <Backdrop />
    </div>
  );
}

export default App;
