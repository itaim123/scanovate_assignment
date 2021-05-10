import React from 'react';
import { useSelector } from 'react-redux';

import Accordion from '../../UIElements/Accordion/Accordion';
import Card from '../../UIElements/Card/Card';

import './ClientData.scss';

const ClientData = () => {
  const data = useSelector(state => state.data.clientData);
  return (
    <div className='clientData'>
      <Accordion title="Client Data">
        <Card data={data.amlData} />
        <Card data={data.estDat} />
        <Card data={data.addClientData} />
        <Card data={data.riskAssessment} />
      </Accordion>
    </div>
  );
};

export default ClientData;
