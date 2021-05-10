import React from 'react';
import { useSelector } from 'react-redux';
import IconComponent from '../../../UIElements/IconComponent/IconComponent';
import CompanyIcon from '../../../../assets/building.png';
import Badge from '../../../UIElements/Badge/Badge';
import './InitialData.scss';

const InitialData = () => {
  const initialData = useSelector(state => state.data.initialData);

  return (
    <div className='initialData'>
      <div className='title'>
        <IconComponent imgSrc={CompanyIcon} alSrc='companyIcon' />
        <div>{initialData.companyName}</div>
      </div>
      <div className='status'>
        <span>Status: </span><Badge mode='success'> {initialData.status}</Badge>
      </div>
      <div className='business_category'>Business Category: <span>{initialData.businessCategory}</span></div>
      <div className='created'>Creation Date: <span>{initialData.created}</span></div>
      <div className='updated'>Updated: <span>{initialData.updated} by case <span>{initialData.caseNo}</span></span></div>

    </div>
  )
};

export default InitialData;