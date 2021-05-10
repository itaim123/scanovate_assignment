import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from '../../UIElements/Accordion/Accordion';
import Card from '../../UIElements/Card/Card';
import './BrokerData.scss';

const BrokerData = () => {
  const data = useSelector(state => state.data.brokerData);
  return (
    <div className='brokerData'>
       <Accordion title="Broker Data">
       <Card data={data.assessments} />
          <Card data={data.riskAssessment} />
          <Card data={data.services} />
          <Card data={data.additionalBrokerData} />
       </Accordion>
    </div>
  );
};

export default BrokerData;
