import React from 'react';

import './Table.scss';

const Table = ({ tableData }) => {
  const headers = Object.keys(tableData[0]);

  const createTdInRow = item => {
    let trContent = [];
    for (let prop in item) {
      trContent.push(<td key={prop}>{item[prop]}</td>)
    }
    return trContent
  }

  return (
    <div className='table'>
      <table style={{ borderSpacing: '0' }}>
        <tbody>
          <tr>
            {headers.map(header => <th key={header}>{header.toUpperCase()}</th>)}</tr>
          {tableData.map((row, idx) => {
            return <tr key={row[headers[0]] + idx}>{createTdInRow(row)}</tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
