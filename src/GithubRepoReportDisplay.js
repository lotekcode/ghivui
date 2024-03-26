//import React, { useState, useEffect } from 'react';
import GithubRepoReportDisplaySummary from "./GithubRepoReportDisplaySummary";
import GithubRepoReportDisplayDetail from "./GithubRepoReportDisplayDetail";

const GithubRepoReportDisplay = ({ pullRequestJsonArray, filters }) => {

  const filteredPullRequestJsonArray = pullRequestJsonArray
    .filter(
      (pullRequestJson) => ( filters.user === 'all' ? true : pullRequestJson.user.login === filters.user)
    )
    .filter(
      (pullRequestJson) => ( filters.state === 'all' ? true : pullRequestJson.state === filters.state )
    )
    .filter(
      (pullRequestJson) => ( filters.isMerged === false ? true : filters.isMerged ===pullRequestJson.merged)
    );

  return ( 
    <div>
      <GithubRepoReportDisplaySummary filteredPullRequestJsonArray={filteredPullRequestJsonArray} user={filters.user} />
      {
        filteredPullRequestJsonArray.map( (filteredPullRequestJson) => {
          return (
            <GithubRepoReportDisplayDetail key={filteredPullRequestJson.id} filteredPullRequestJson={filteredPullRequestJson} />
          )
        })
      }
    </div>
  );
}
export default GithubRepoReportDisplay;


// return pullRequestJson.user.login === 'all' ? true : pullRequestJson.user.login === filters.user

/*


*/