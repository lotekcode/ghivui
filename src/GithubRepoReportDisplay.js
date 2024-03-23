//import React, { useState, useEffect } from 'react';

const GithubRepoReportDisplay = ({ pullRequestJsonArray, filters }) => {

    const filteredPullRequestJsonArray = pullRequestJsonArray
        .filter(
          (pullRequestJson) => ( filters.user === 'all' ? true : pullRequestJson.user.login === filters.user)
        )
        .filter(
          (pullRequestJson) => ( filters.state === 'all' ? true : pullRequestJson.state === filters.state )
        )
        .filter(
          (pullRequestJson) => ( filters.isMerged === pullRequestJson.merged)
        );


    return ( 
        filteredPullRequestJsonArray.map( (filteredPullRequestJson) => {
            return (
                <div key={filteredPullRequestJson.id}>
                    User: {filteredPullRequestJson.user.login}<br />
                    Pull URL: {filteredPullRequestJson.url}<br />
                    State: {filteredPullRequestJson.state}<br />
                    Merged at: {filteredPullRequestJson.merged_at}<br />
                    Additions: {filteredPullRequestJson.additions}<br />
                    Deletions: {filteredPullRequestJson.deletions}<br />
                    Changed Files: {filteredPullRequestJson.changed_files}<br />
                </div>
            )
        })
    );
}
export default GithubRepoReportDisplay;


// return pullRequestJson.user.login === 'all' ? true : pullRequestJson.user.login === filters.user