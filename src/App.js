import React from 'react';
import GitHubUserRepos from './GitHubUserRepos';

const App = () => (
  <div className="App">
    <div className="container">
      <GitHubUserRepos top={10} />
    </div>
  </div>
);

export default App;
