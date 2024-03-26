import React from 'react'
import { Table } from "react-bootstrap";

const GithubRepoReportDisplaySummary = ({filteredPullRequestJsonArray, user}) => {

    const userPrCount = filteredPullRequestJsonArray.length; 
    const userPrMergedCount = filteredPullRequestJsonArray.reduce( (acc, cur) => { return cur.merged ? acc += 1 : acc += 0 }, 0);
    const userCommitsCount = filteredPullRequestJsonArray.reduce( (acc, cur) => acc += cur.commits, 0);
    const userAdditionsCount = filteredPullRequestJsonArray.reduce( (acc, cur) => acc += cur.additions, 0);
    const userDeletionsCount = filteredPullRequestJsonArray.reduce( (acc, cur) => acc += cur.deletions, 0);


  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th colSpan="2">Pull Request Summary for user {user}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Total PRs</td>
                <td>{userPrCount}</td>
            </tr>
            <tr>
                <td>PRs Merged</td>
                <td>{userPrMergedCount}</td>
            </tr>
            <tr>
                <td>Commits</td>
                <td>{userCommitsCount}</td>
            </tr>
            <tr>
                <td>Additons</td>
                <td>{userAdditionsCount}</td>
            </tr>
            <tr>
                <td>Deletions</td>
                <td>{userDeletionsCount}</td>
            </tr>
        </tbody>
    </Table>
  )
}
export default GithubRepoReportDisplaySummary;