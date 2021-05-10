import React from 'react';

import successIcon from '../../../assets/success.jpg';
import failIcon from '../../../assets/fail.png';

import './Approval.scss';

const Approval = ({ approved }) => (
  <div className="approval">
    {
      approved ?
        <img src={successIcon} alt='successIcon' /> :
        <img src={failIcon} alt='failIcon' />
    }
  </div>
)

export default Approval;
