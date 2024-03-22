//import React, { useState, useEffect } from 'react';

const GithubRepoReportDisplay = ({ pullRequestJsonArray, filters }) => {

    //const userContributionSummaryJson = pullRequestJsonArray.filter((pr) => (pr.user.login === 'dantidwell')); //dantidwell
    //const reportJson = pullRequestJsonArray;
    const reportJson = pullRequestJsonArray;

    return ( 
        reportJson.map( (pullRequestJson) => {
            return (
                <div key={pullRequestJson.id}>
                    User: {pullRequestJson.user.login}<br />
                    Pull URL: {pullRequestJson.url}<br />
                    State: {pullRequestJson.state}<br />
                    Merged at: {pullRequestJson.merged_at}<br />
                    Additions: {pullRequestJson.additions}<br />
                    Deletions: {pullRequestJson.deletions}<br />
                    Changed Files: {pullRequestJson.changed_files}<br />
                </div>
            )
        })
    );
}
export default GithubRepoReportDisplay;