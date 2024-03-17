import React, { useState } from 'react';
import DisplayContributorsData from './DisplayContributorsData';

const GithubRepoReports = ({ githubOwner, githubRepo }) => {
  const [reportUrl, setReportUrl] = useState(`https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`);
  const [displayReport, setDisplayReport] = useState('false');
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');

  const handleClick = (e) => {
    setReportUrl(`https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`);
    setDisplayReport('true');
  }
    
  return (
    <div>
        Github Contributors Report: {reportUrl} <br />
        <button onClick={handleClick}>Generate Report</button>
        { displayReport && <DisplayContributorsData githubOwner={githubOwner} githubRepo={githubRepo} /> }
    </div>
  )
}

export default GithubRepoReports;
