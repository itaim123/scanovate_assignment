import React from 'react';

import './Badge.scss';

const Badge = ({ mode, children }) => (
    <div className={`badge ${mode}`}>
      {children}
    </div>
  );

export default Badge;
