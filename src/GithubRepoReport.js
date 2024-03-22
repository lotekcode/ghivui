import React, { useState, useEffect } from 'react';
import { bearerToken } from './.env/secure';
import GithubRepoReportDisplay from './GithubRepoReportDisplay';


const GithubRepoReport = ({ githubApiUrl, filters}) => {
  const [githubApiResponse, setGithubApiResponse] = useState([]);
  const [githubApiError, setGithubApiError] = useState(null);
  const [apiCallLoading, setApiCallLoading] = useState(true);

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

      const apiResponse = await fetch(apiUrl, headers);
      const pullRequestJsonArray = await apiResponse.json();

      pullRequestJsonArray.map(async (pullRequestJson) => {
        const apiResponse = await fetch(pullRequestJson.url, headers);
        const pullRequestObjectJson = await apiResponse.json();

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
        <GithubRepoReportDisplay pullRequestJsonArray={githubApiResponse} filters={filters} />
      )}
    </div>
  );
}
export default GithubRepoReport;


