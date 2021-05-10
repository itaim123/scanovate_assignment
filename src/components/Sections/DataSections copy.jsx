import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from '../UIElements/Accordion/Accordion';
import ClientData from './ClientData/ClientData';
import BrokerData from './BrokerData/BrokerData';
import OrganizationData from './OrganizationData/OrganizationData';

import './DataSections.scss';

const DataSections = () => {
  const { organizationData, clientData, brokerData } = useSelector(state=>state.data);
  return (
    <div className='dataSections'>
      <OrganizationData data={organizationData} />
      <ClientData data={clientData} />
      <BrokerData data={brokerData} />
    </div>
  );
};

export default DataSections;
