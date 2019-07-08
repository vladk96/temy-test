import React from 'react';

const TableRow = ({ name, email, phone, city, country, state, date }) => (
  <>
    <tr>
      {[name, email, phone, country, state, city, date].map(
        (rowValue, index) => (
          <td key={index}>{rowValue ? rowValue : '-'}</td>
        )
      )}
    </tr>
  </>
);

export default TableRow;
