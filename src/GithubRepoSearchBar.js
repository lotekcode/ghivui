import React, { useState } from 'react';

const GithubRepoSearch = ({ setGithubOwner, setGithubRepo }) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const [owner, repo] = parseRepoUrl();
    setGithubOwner(owner);
    setGithubRepo(repo);
    setRepoUrl('');
  };

  const handleChange = (e) => {
    setRepoUrl(e.target.value);
  };

  const parseRepoUrl = () => {
    const repoPath = repoUrl.split('https://github.com/')[1];
    const [owner, repo] = repoPath.split('/');
    return([owner, repo]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter full GitHub repo URL:<br />
          <input
            type="text"
            value={repoUrl}
            onChange={handleChange}
            placeholder="https://github.com/username/repo"
            size="40"
            required
          />
        </label>
        <button type="submit">List Reports</button>
      </form>
    </div>
  );
};

export default GithubRepoSearch;
