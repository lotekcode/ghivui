import React from 'react'
import { Table } from "react-bootstrap";

const GithubRepoReportDisplayDetail = ({filteredPullRequestJson}) => {

  return (
    <Table key={filteredPullRequestJson.id} striped bordered hover>
        <thead>
            <tr>
                <th colSpan="2">User: {filteredPullRequestJson.user.login}</th>
            </tr>
            <tr>
                <th colSpan="2">PR Title: {filteredPullRequestJson.title}</th>
            </tr>
            <tr>
                <th colSpan="2">PR URL: {filteredPullRequestJson.url}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Create Date</td>
                <td>{filteredPullRequestJson.created_at}</td>
            </tr>
            <tr>
                <td>State</td>
                <td>{filteredPullRequestJson.state}</td>
            </tr>
            <tr>
                <td>Merged?</td>
                <td>{filteredPullRequestJson.merged}</td>
            </tr>
            <tr>
                <td>Merged Date</td>
                <td>{filteredPullRequestJson.merged_at}</td>
            </tr>
            <tr>
                <td>Commits</td>
                <td>{filteredPullRequestJson.commits}</td>
            </tr>
            <tr>
                <td>Changed Files</td>
                <td>{filteredPullRequestJson.changed_files}</td>
            </tr>
            <tr>
                <td>Additions</td>
                <td>{filteredPullRequestJson.additions}</td>
            </tr>
            <tr>
                <td>Deletions</td>
                <td>{filteredPullRequestJson.deletions}</td>
            </tr>
        </tbody>
    </Table>                
  )
}
export default GithubRepoReportDisplayDetail;