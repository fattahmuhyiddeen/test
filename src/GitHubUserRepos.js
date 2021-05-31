import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import axios from 'axios';

class GitHubUserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      repos: [],
    };

    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos', {
        params: {
          sort: 'pushed',
        }
      });
  }

  updateRepos(response) {
    this.setState({
      repos: response.data
    })
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit() {
    this.getRepos(this.state.searchText).then(this.updateRepos.bind(this));
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          onSearchTextInput={this.handleSearchTextInput}
          onSubmit={this.handleSubmit}
        />

        <hr />
        
        <RepoList 
          repos={this.state.repos}
          top={this.props.top}
        />
      </div>
    );
  }
}

export default GitHubUserRepos;
