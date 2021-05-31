import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoRow from './Row';
import RepoListHeader from './RepoListHeader';

const RepoList = (props) => {
    if (!props.repos) return null;

    const rows = props.repos.slice(0, props.top).map((repo) =>
      (<RepoRow repo={repo} key={repo.name} />)
    );
    return (
      <div>
        <RepoListHeader repos={props.repos} top={props.top} />

        <ListGroup className="text-left">
          {rows}
        </ListGroup>
      </div>
    );
}

export default RepoList;
