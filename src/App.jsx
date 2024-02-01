import React, { useState } from 'react';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p className="error-message">{error}</p>}
      <DataDisplay data={data} />
    </div>
  );
};

export default App;
