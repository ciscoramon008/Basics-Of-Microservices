import React from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h3>BLOG APP WOOOHOOOO!</h3>
      <h1>Create a new Post:</h1>
      <CreatePost />
      <hr />
      <h2>See All Posts</h2>
      <PostList />
    </div>
  );
}

export default App;