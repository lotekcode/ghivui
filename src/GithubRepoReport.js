import React, { useState, useEffect } from 'react';
import { bearerToken } from './.env/secure';
import GithubRepoReportFilters from './GithubRepoReportFilters';
import GithubRepoReportDisplay from './GithubRepoReportDisplay';


const GithubRepoReport = ({ githubApiUrl }) => {
  const [githubApiResponse, setGithubApiResponse] = useState([]);
  const [githubApiError, setGithubApiError] = useState(null);
  const [apiCallLoading, setApiCallLoading] = useState(true);
  const [filters, setFilters] = useState(
    {
      isSet: false,
      user: 'All',
      start_date: new Date(),
      end_date: new Date(),
      state: 'all'
    }
  );
  const [filterOptions, setFilterOptions] = useState(
    {
      'users': ['All', 'dantidwell', 'OakleyCord', 'BBQGiraffe'],
      'state': '',
    }
  );

  useEffect(() => {
    const headers = {
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization' : bearerToken 
      }
    };

    const fetchPullRequestJsonArray = async (apiUrl) => {
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

    /*
    const loadFilterOptions = (pullRequestJsonArray) => {
      const uniqueUsers = pullRequestJsonArray.map( (pullRequestJson) => pullRequestJson.user.login);
      setFilterOptions( { ...filterOptions, 'users': [uniqueUsers] });
      console.log(filterOptions)
    }
    */

    fetchPullRequestJsonArray(githubApiUrl);
    //loadFilterOptions(githubApiResponse);
    

  }, [githubApiUrl]);

  return (
    <div>
      <h1>Pull Request Report</h1>
      {apiCallLoading && <p>Loading...</p>}
      {githubApiError && <p>Error: {githubApiError.message}</p>}
      { githubApiUrl &&
        <GithubRepoReportFilters filters={filters} setFilters={setFilters} filterOptions={filterOptions} />
      }
      {!githubApiError && githubApiResponse && filters.isSet && (
        <GithubRepoReportDisplay pullRequestJsonArray={githubApiResponse} filters={filters} />
      )}
    </div>
  );
}
export default GithubRepoReport;


