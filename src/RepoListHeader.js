import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class RepoListHeader extends Component {
  render() {
    if (!this.props.repos) {
      return null;
    }

    return (
        <Grid fluid>
          <Row>
            <Col md={8} className="text-left">
              <h4>Repositories</h4>
            </Col>
          </Row>

          <Row className="text-left">
            <Col md={12}>
                <p>Found {this.props.repos.length} repositories.
                {this.props.top && 
                  <span>{' '}Showing top {this.props.top}.</span>
                }
              </p>

            </Col>
          </Row>
        </Grid>
    );
  }
}

export default RepoListHeader;
