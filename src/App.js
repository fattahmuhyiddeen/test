import React, { Component } from 'react';
import GitHubUserRepos from './GitHubUserRepos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <GitHubUserRepos top={10} />
        </div>
      </div>
    );
  }
}

export default App;
