import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import GithubRepoSearchBar from './GithubRepoSearchBar';
import GithubRepoReport from './GithubRepoReport';

const App = () => {
  const [githubApiUrl, setGithubApiUrl] = useState(null);

  return (
    <div>
      <GithubRepoSearchBar  setGithubApiUrl={setGithubApiUrl} />

      { githubApiUrl &&
        <GithubRepoReport githubApiUrl={githubApiUrl} />
      }
    </div>
  );
}

export default App;
