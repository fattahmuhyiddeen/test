import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

const Row = (props) => (
  <ListGroupItem header={props.repo.name} href={props.repo.html_url}>
    {props.repo.description}<br />
    <span className="small">Updated <TimeAgo date={props.repo.pushed_at} /></span>
  </ListGroupItem>
);

export default Row;
