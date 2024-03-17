import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import GithubRepoSearchBar from './GithubRepoSearchBar';
import GithubRepoReportList from './GithubRepoReportList';
import GithubRepoReportDisplay from './GithubRepoReportDisplay';

const App = () => {
  const [githubOwner, setGithubOwner] = useState(null);
  const [githubRepo, setGithubRepo] = useState(null);
  const [githubReport, setGithubReport] = useState(null);

  return (
    <div>
      <GithubRepoSearchBar setGithubOwner={setGithubOwner} setGithubRepo={setGithubRepo} />

      { githubOwner && githubRepo &&
        <GithubRepoReportList githubOwner={githubOwner} githubRepo={githubRepo} setGithubReport={setGithubReport} />
      }

      { githubReport &&
        <GithubRepoReportDisplay githubReport={githubReport} />
      }
    </div>
  );
}

export default App;
