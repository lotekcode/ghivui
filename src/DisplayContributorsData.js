
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayContributorsDataElement from './DisplayContributorsDataElement';

const DisplayContributorsData = ({ githubOwner, githubRepo }) => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosGetUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`;
        console.log(axiosGetUrl);
        const response = await axios.get(axiosGetUrl, {
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
  }, [githubRepo]);

  return ( 
    <div>
      <h1>Fetching GitHub Repository Contributors</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {jsonData && (
        jsonData.map(jsonDataElement => (
          <DisplayContributorsDataElement key={jsonDataElement.author.login} data={jsonDataElement} />
        ))
      )}
    </div>
  );
};

export default DisplayContributorsData;