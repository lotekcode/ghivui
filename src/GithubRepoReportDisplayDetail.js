import React from 'react'
import { Card, ListGroup, Col } from "react-bootstrap";

const GithubRepoReportDisplayDetail = ({filteredPullRequestJson}) => {

  return (
    <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>
                    <Card.Link href={filteredPullRequestJson.html_url} target="_blank">{filteredPullRequestJson.title}</Card.Link>
                </Card.Header>
                <ListGroup varian="flush">
                    <ListGroup.Item>User: {filteredPullRequestJson.user.login}</ListGroup.Item>
                    <ListGroup.Item>Created at: {filteredPullRequestJson.created_at}</ListGroup.Item>
                    <ListGroup.Item>State: {filteredPullRequestJson.state}</ListGroup.Item>
                    <ListGroup.Item>Merged Date: {filteredPullRequestJson.merged_at}</ListGroup.Item>
                    <ListGroup.Item>Commits: {filteredPullRequestJson.commits}</ListGroup.Item>
                    <ListGroup.Item>Additions: {filteredPullRequestJson.additions}</ListGroup.Item>
                    <ListGroup.Item>Deletions: {filteredPullRequestJson.deletions}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>  
    </Col>        
  )
}
export default GithubRepoReportDisplayDetail;

/*
<Card style={{ width: 18rem' }}>
    <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>

    </Card.Body
</Card>

*/