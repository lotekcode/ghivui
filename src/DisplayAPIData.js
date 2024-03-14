
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayAPIDataElement from './DisplayAPIDataElement';

const DisplayAPIData = () => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/atherosai/ui/stats/contributors', {
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        setJsonData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return ( 
    <div>
      <h1>Fetching GitHub Repository Contributors</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {jsonData && (
        jsonData.map(jsonDataElement => (
          <DisplayAPIDataElement key={jsonDataElement.author.login} data={jsonDataElement} />
        ))
      )}
    </div>
  );
};

export default DisplayAPIData;