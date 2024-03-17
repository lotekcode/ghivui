import React, { useState } from 'react';
import DisplayContributorsData from './DisplayContributorsData';

const GithubRepoReportList = ({ githubOwner, githubRepo }) => {
  const [reportUrl, setReportUrl] = useState(`https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`);
  const [displayReport, setDisplayReport] = useState(false);

  const GITHUB_REPORT_LIST = [ 
                                {
                                  reportName: 'Commit Report', 
                                  reportUrl: 'https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors',
                                },
                                {
                                  reportName: 'Pull Request Report', 
                                  reportUrl: 'https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors',
                                }
                            ];

  const handleClick = (e) => {
    const newUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`;
    setReportUrl(newUrl);
    setDisplayReport(true);
    console.log(newUrl);
    console.log(reportUrl);
  }
    
  return (
    <div>
        Report List: <br />
        <ul>
        {
          GITHUB_REPORT_LIST.map( (report) => (
            <li>
              <button onClick={handleClick}>{report.reportName}</button>
              {report.reportUrl}
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default GithubRepoReportList;
