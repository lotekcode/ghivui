import React, { useState, useEffect } from 'react';
import { bearerToken } from './.env/secure';
import GithubRepoReportFilters from './GithubRepoReportFilters';
import GithubRepoReportDisplay from './GithubRepoReportDisplay';


const GithubRepoReport = ({ githubApiUrl }) => {
  const [githubApiResponse, setGithubApiResponse] = useState([]);
  const [githubApiError, setGithubApiError] = useState(null);
  const [apiCallLoading, setApiCallLoading] = useState(true);
  const [filters, setFilters] = useState({
    isSet: false,
    user: 'all',
    start_date: new Date(),
    end_date: new Date(),
    state: 'all',
    isMerged: false,
  });
  const [filterOptions, setFilterOptions] = useState({
    'users': ['all'],
    'state': ['all', 'open', 'closed'],
  });

  useEffect( () => {
    const headers = {
      'per_page': 100,
      'headers': {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization' : bearerToken 
      }
    };

    const fetchPullRequestJsonArray = async (apiUrl, headers) => {
      const pullRequestJsonArray = await fetchApiResponseJson(apiUrl, headers);
      const hydratedPullRequestJsonArray = await Promise.all(
        pullRequestJsonArray.map( 
          async (pullRequestJson) => await fetchApiResponseJson(pullRequestJson.url, headers)
        )
      );
    
      setGithubApiError(null);
      setApiCallLoading(false);
      return hydratedPullRequestJsonArray;
    }  
 
    const loadFilterOptions = (pullRequestJsonArray) => {
      const allUsers = pullRequestJsonArray.map( (pullRequestJson) => pullRequestJson.user.login);
      const uniqueUsers = allUsers.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

      setFilterOptions( { 
        ...filterOptions, 
        'users': ['all', ...uniqueUsers],  
      });
    }
  
    const setStates = async (githubApiUrl, headers) => {
      const dataForSetGithubApiResponse = await fetchPullRequestJsonArray(githubApiUrl, headers)
      .then( dataForSetGithubApiResponse=> {
        setGithubApiResponse (dataForSetGithubApiResponse)
        loadFilterOptions(dataForSetGithubApiResponse);
    });
      return dataForSetGithubApiResponse;
    }
    
    setStates(githubApiUrl, headers);

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


const fetchApiResponseJson = async (apiUrl, headers) => {
  const apiResponse = await fetch(apiUrl, headers);
  const apiResponseJson = await apiResponse.json();
  return apiResponseJson;
}

