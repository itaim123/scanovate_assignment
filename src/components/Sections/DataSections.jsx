import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from '../UIElements/Accordion/Accordion';

import './DataSections.scss';

const DataSections = () => {

  const { organizationData, clientData, brokerData } = useSelector(state=>state.data);
  
  return (
    <div className='dataSections'>
      <Accordion title="Organizational Data" data={organizationData} />
      <Accordion title="Client Data" data={clientData} />
      <Accordion title="Broker Data" data={brokerData} />
    </div>
  );
};

export default DataSections;
