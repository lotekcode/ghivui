//import React, { useState, useEffect } from 'react';
//import getApiData from './Utilities';

const DisplayPullRequestDataElement = ({ data }) => {
  const { user, url, merged_at, merged, commits_url, commits, additions, deletions, changed_files } = data;
  //const [jsonData, setJsonData] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

/*
  useEffect(() => {
    setError(null);
    getApiData(commits_url, setJsonData, setError, setLoading);
  }, [url]);
*/

  return (
    <div>
        <p>
            User:{user.login} <br />
            PR URL:<a href={url}>{url}</a><br />
            Merged?: {merged}<br />
            Merged at: {merged_at}<br />
            Commits URL:<a href={commits_url}>{commits_url}</a><br />
            Commits: {commits}<br />
            Additions: {additions}<br />
            Deletions: {deletions}<br />
            Changed Files: {changed_files}<br />
        </p>
    </div>
  );
};

export default DisplayPullRequestDataElement;

//{ jsonData.map( commit => (console.log(commit.url)))}
