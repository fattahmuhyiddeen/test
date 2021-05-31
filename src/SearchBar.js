import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(event.target.value);
  }

  const handleSearchTextInputChange = (event) => {
    props.onSearchTextInput(event.target.value);
  }

  return (
    <Form inline onSubmit={handleSubmit} className="text-left container-fluid">
      <FormGroup controlId="formInlineName">
        <FormControl type="text" placeholder="Search by language or topic" value={props.searchText} onChange={handleSearchTextInputChange} />
      </FormGroup>
      {' '}
      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;
