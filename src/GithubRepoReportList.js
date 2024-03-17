import React from 'react';

const GithubRepoReportList = ({ githubOwner, githubRepo, setGithubReport }) => {

  const GITHUB_REPORT_LIST = [ 
                                {
                                  reportName: 'Commit Report', 
                                  reportUrl: `https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`,
                                },
                            ];

  const handleClick = (e) => {
    const newUrl = `https://api.github.com/repos/${githubOwner}/${githubRepo}/stats/contributors`;
    setGithubReport(newUrl);
  }
    
  return (
    <div>
        Report List for {githubOwner}/{githubRepo}: <br />
        <ul>
        {
          GITHUB_REPORT_LIST.map( (report) => (
            <li key={report.reportName}>
              <button onClick={handleClick}>{report.reportName}</button>{report.reportUrl}
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default GithubRepoReportList;
