import React from 'react';
import DisplayContributorsData from './DisplayContributorsData';

const GithubRepoReportDisplay = ({ githubReport }) => {

  return (
    <DisplayContributorsData githubReport={githubReport}/>
  );
}

export default GithubRepoReportDisplay;