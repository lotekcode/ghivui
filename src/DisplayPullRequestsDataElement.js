import React from 'react';
//import Table from 'react-bootstrap/Table';

const DisplayPullRequestDataElement = ({ data }) => {
  const { user, url, merged_at, commits_url } = data;

  return (
    <div>
        <p>
            User:{user.login} <br />
            PR:<a href={url}>{url}</a><br />
            Commits:<a href={commits_url}>{commits_url}</a><br />
            Merged at: {merged_at}
        </p>
    </div>
  );
};

export default DisplayPullRequestDataElement;