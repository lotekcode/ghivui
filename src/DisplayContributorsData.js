import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayContributorsDataElement from './DisplayContributorsDataElement';

const DisplayContributorsData = ({ githubReport }) => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(githubReport, {
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        if(response.status == '200') {
          setJsonData(response.data);
        }
        else {
          setJsonData(null);
          setError({message: `API responded with a HTTP status ${response.status}`});
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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