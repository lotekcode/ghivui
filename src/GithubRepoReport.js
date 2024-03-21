import React, { useState, useEffect } from 'react';
import { bearerToken } from './.env/secure';
import GithubRepoReportDisplay from './GithubRepoReportDisplay';


const GithubRepoReport = ({ githubApiUrl }) => {
  const [githubApiResponse, setGithubApiResponse] = useState([]);
  const [githubApiError, setGithubApiError] = useState(null);
  const [apiCallLoading, setApiCallLoading] = useState(true);

  /*
  useEffect(() => {
    const fetchData = async (apiUrl) => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization' : bearerToken
          }
        });
    
        if(response.status === 200) {
          setGithubApiResponse(
            convertArrayOfPullUrlsToArrayOfPullObjects(
              convertArrayOfPullObjectsToArrayOfPullUrls(response.data)
            )
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
  */

  useEffect(() => {
    const headers = {
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization' : bearerToken 
      }
    };

    async function fetchPullRequestJsonArray(apiUrl) {
      let hydratedPullRequestJsonArray = [];

      const apiResponse1 = await fetch(apiUrl, headers);
      const pullRequestJsonArray = await apiResponse1.json();

      pullRequestJsonArray.map(async (pullRequestJson) => {
        const apiResponse2 = await fetch(pullRequestJson.url, headers);
        const pullRequestObjectJson = await apiResponse2.json();

        hydratedPullRequestJsonArray = [...hydratedPullRequestJsonArray, pullRequestObjectJson];
        setGithubApiResponse(hydratedPullRequestJsonArray);
      });

      setGithubApiError(null);
      setApiCallLoading(false);
    }

    fetchPullRequestJsonArray(githubApiUrl);
  }, [githubApiUrl]);

  return (
    <div>
      <h1>Pull Request Report</h1>
      {apiCallLoading && <p>Loading...</p>}
      {githubApiError && <p>Error: {githubApiError.message}</p>}
      {!githubApiError && githubApiResponse && (
        <GithubRepoReportDisplay pullRequestJsonArray={githubApiResponse} />
      )}
    </div>
  );
}
export default GithubRepoReport;


