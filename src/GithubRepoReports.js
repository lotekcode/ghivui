import React, { useState } from 'react';
import DisplayContributorsData from './DisplayContributorsData';

const GithubRepoReports = ({ githubOwner, githubRepo }) => {
  const [reportUrl, setReportUrl] = useState(`https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`);
  const [displayReport, setDisplayReport] = useState(false);
  const [owner, setOwner] = useState(githubOwner);
  const [repo, setRepo] = useState(githubRepo);

  const handleClick = (e) => {
    const newUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`;
    setReportUrl(newUrl);
    setDisplayReport(true);
    console.log(newUrl);
    console.log(reportUrl);
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
