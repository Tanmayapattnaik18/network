import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div className="data-container">
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default DataDisplay;
