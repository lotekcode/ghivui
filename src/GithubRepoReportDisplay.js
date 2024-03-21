//import React, { useState, useEffect } from 'react';

const GithubRepoReportDisplay = ({ pullRequestJsonArray }) => {

    return ( 
        pullRequestJsonArray.map( (pullRequestJson) => {
            return (
                <div>
                    User: {pullRequestJson.user.login}<br />
                    Pull URL: {pullRequestJson.url}<br />
                    Pull ID: {pullRequestJson.id}<br />
                    Additions: {pullRequestJson.additions}<br />
                    Deletions: {pullRequestJson.deletions}<br />
                    Changed Files: {pullRequestJson.changed_files}<br />
                </div>
            )
        })
    );
}
export default GithubRepoReportDisplay;