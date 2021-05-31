import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import axios from 'axios';

const GitHubUserRepos = (props) => {
  const [searchText, setSearchText] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSubmit = () => {
    axios.get('https://api.github.com/users/' + searchText + '/repos', {
    // axios.get('https://api.github.com/search/repositories?q=language:' + searchText, {
        params: {
          sort: 'pushed',
        }
      })
      .then(res => setRepos(res.data));
  }

  return (
    <div>
      <SearchBar 
        searchText={searchText}
        onSearchTextInput={setSearchText}
        onSubmit={handleSubmit}
      />

      <hr />
      
      <RepoList 
        repos={repos}
        top={props.top}
      />
    </div>
  );
}

export default GitHubUserRepos;
