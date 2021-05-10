import React from 'react';

import { useSelector } from 'react-redux';

import Accordion from '../../UIElements/Accordion/Accordion';
import Card from '../../UIElements/Card/Card';
import './OrganizationData.scss';

const OrganizationData = () => {
  const data = useSelector(state => state.data.organizationData);
  Object.keys(data)
  return (
    <div className='organizationData'>
      <Accordion
        title="Organization Data">
          <Card data={data.identificationData} />
          <Card data={data.addresses} />
          <Card data={data.contactInfo} />
      </Accordion>
    </div>
  );
};

export default OrganizationData;
