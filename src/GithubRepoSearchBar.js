import React, { useState } from 'react';

const GithubRepoSearchBar = ({ setGithubApiUrl }) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleChange = (e) => {
    setRepoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [owner, repo] = parseRepoUrl();
    setGithubApiUrl(`https://api.github.com/repos/${owner}/${repo}/pulls?state=merged`);
    setRepoUrl('');
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
        <button type="submit">Generate Report</button>
      </form>
    </div>
  );
};

export default GithubRepoSearchBar;
