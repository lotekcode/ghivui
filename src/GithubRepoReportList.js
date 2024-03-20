import React from 'react';

const GithubRepoReportList = ({ githubOwner, githubRepo, setGithubReport }) => {

  const GITHUB_REPORT_LIST = [ 
                                {
                                  name: 'Commit Report', 
                                  url: `https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`,
                                },
                                {
                                  name: 'Merged PRs',
                                  url: `https://api.github.com/repos/${githubOwner}/${githubRepo}/pulls`,
                                },
                            ];

  const findUrl = (reportName) => {
    const foundReport = GITHUB_REPORT_LIST.find(report => (report.name === reportName));
    return foundReport ? foundReport.url : null;
  }

  const handleClick = (reportName) => {
    setGithubReport(findUrl(reportName));
  }
    
  return (
    <div>
        Report List for {githubOwner}/{githubRepo}: <br />
        <ul>
        {
          GITHUB_REPORT_LIST.map( (report) => (
            <li key={report.reportName}>
              <button onClick={() => handleClick(report.name)}>{report.name}</button>{report.url}
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default GithubRepoReportList;
