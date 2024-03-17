import './App.css';
import React, { useState } from 'react';
import GithubRepoSearchBar from './GithubRepoSearchBar';
import GithubRepoReports from './GithubRepoReports';

const App = () => {
  const [githubOwner, setGithubOwner] = useState('');
  const [githubRepo, setGithubRepo] = useState('');

  return (
    <div>
      <GithubRepoSearchBar setGithubOwner={setGithubOwner} setGithubRepo={setGithubRepo} />
      <GithubRepoReports githubOwner={githubOwner} githubRepo={githubRepo} />
    </div>
  );
}

export default App;
