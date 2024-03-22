import React, { useState, useEffect } from 'react';
import DisplayContributorsDataElement from './DisplayContributorsDataElement';
import getApiData from '../Utilities';

const DisplayContributorsData = ({ githubReport }) => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getApiData(githubReport, setJsonData, setError, setLoading);
  }, [githubReport]);

  return ( 
    <div>
      <h1>Commit Report</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!error && jsonData && (
        jsonData.map(jsonDataElement => (
          <DisplayContributorsDataElement key={jsonDataElement.author.login} data={jsonDataElement} />
        )) 
      )}
    </div>
  );
};

export default DisplayContributorsData;