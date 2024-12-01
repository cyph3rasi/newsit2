import React from 'react';
    import Navbar from './components/Navbar.jsx';
    import PostFeed from './components/PostFeed.jsx';

    const App = () => {
      return (
        <div className="app">
          <Navbar />
          <PostFeed />
        </div>
      );
    };

    export default App;
