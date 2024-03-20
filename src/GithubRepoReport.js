import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GithubRepoReportDisplay = ({ githubApiUrl }) => {
  const [githubApiReponse, setGithubApiResponse] = useState(null);
  const [githubApiError, setGithubApiError] = useState(null);
  const [apiCallLoading, setApiCallLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async (apiUrl) => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
    
        if(response.status === 200) {
          //setGithubApiResponse(response.data);
          setGithubApiResponse(
            convertArrayOfPullUrlsToArrayOfPullObjects(convertArrayOfPullObjectsToArrayOfPullUrls(response.data))
          )
        }
        else {
          setGithubApiError({message: `API responded with a ${response.status}`});
        }
      } catch (error) {
        setGithubApiError(error);
      } finally {
        setApiCallLoading(false);
      }
    }

    fetchData(githubApiUrl);

  }, [githubApiUrl]);


  return (
    <div>
      <h1>Pull Request Report</h1>
      {apiCallLoading && <p>Loading...</p>}
      {githubApiError && <p>Error: {githubApiError.message}</p>}
      {!githubApiError && githubApiReponse && (
        JSON.stringify(githubApiReponse)
      )}
    </div>
  );
}
export default GithubRepoReportDisplay;

const convertArrayOfPullObjectsToArrayOfPullUrls =(arrayOfPullObjectsJson) => {
  const arrayOfPullUrlsJson = arrayOfPullObjectsJson.reduce((acc, curr) => [...acc, curr.url], []);
  return arrayOfPullUrlsJson;
}

const convertArrayOfPullUrlsToArrayOfPullObjects = (arrayOfPullUrls) => {
  const arrayOfPullObjectsJson = arrayOfPullUrls.map( (pullUrl) => axios.get(pullUrl));
  return arrayOfPullObjectsJson;
}