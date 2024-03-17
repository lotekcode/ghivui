import './App.css';
import React, { useState } from 'react';
import GithubRepoSearchBar from './GithubRepoSearchBar';
import GithubRepoReportList from './GithubRepoReportList';

const App = () => {
  const [githubOwner, setGithubOwner] = useState(null);
  const [githubRepo, setGithubRepo] = useState(null);



  /* Hierarchy of components is something like this for now:

    - GithubRepoSearchBar
      -GithubRepoReportList
      -GithubRepoReport

  */

  return (
    <div>
      <GithubRepoSearchBar setGithubOwner={setGithubOwner} setGithubRepo={setGithubRepo} />

      { githubOwner && githubRepo &&
        <GithubRepoReportList githubOwner={githubOwner} githubRepo={githubRepo} />
      }
    </div>
  );
}

export default App;
