//import React, { useState, useEffect } from 'react';
import GithubRepoReportDisplaySummary from "./GithubRepoReportDisplaySummary";
import GithubRepoReportDisplayDetail from "./GithubRepoReportDisplayDetail";
import { Row } from "react-bootstrap";

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
      <Row xs={1} md={5} className="g-4">
        {filteredPullRequestJsonArray.map( (filteredPullRequestJson) => {
            return (
              <GithubRepoReportDisplayDetail key={filteredPullRequestJson.id} filteredPullRequestJson={filteredPullRequestJson} />
            )
        })}
      </Row>
    </div>
  );
}
export default GithubRepoReportDisplay;


