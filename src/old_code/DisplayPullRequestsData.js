import React, { useState, useEffect } from 'react';
import DisplayPullRequestsDataElement from './DisplayPullRequestsDataElement';
import getApiData from './Utilities';

const DisplayPullRequestData = ({ githubReport }) => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setError(null);
    getApiData(githubReport, setJsonData, setError, setLoading);
  }, [githubReport]);

  return ( 
    <div>
      <h1>Pull Request Report</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!error && jsonData && (
        jsonData.map(jsonDataElement => ( 
          <DisplayPullRequestsDataElement key={jsonDataElement.id} data={jsonDataElement} /> 
        )) 
      )}
    </div>
  );
};

export default DisplayPullRequestData;