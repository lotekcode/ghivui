import React from 'react';
//import DisplayContributorsData from './DisplayContributorsData';
import DisplayPullRequestData from './DisplayPullRequestsData';

const GithubRepoReportDisplay = ({ githubReport }) => {

  return (
    //<DisplayContributorsData githubReport={githubReport}/>
    <DisplayPullRequestData githubReport={githubReport} />
  );
}

export default GithubRepoReportDisplay;