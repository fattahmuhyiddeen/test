import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RepoListHeader = (props) => {
    if (!props.repos) return null;

  return (
      <Container fluid>
        <Row>
          <Col md={8} className="text-left">
            <h4>Repositories</h4>
          </Col>
        </Row>

        <Row className="text-left">
          <Col md={12}>
              <p>Found {props.repos.length} repositories.
              {props.top && 
                <span>{' '}Showing top {props.top}.</span>
              }
            </p>

          </Col>
        </Row>
      </Container>
  );
}

export default RepoListHeader;
