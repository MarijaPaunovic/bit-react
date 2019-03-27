import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import posts from './posts';

const App = () => (
      <div className="App">
        <header>
          <h1>My React Blog</h1>
            
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            )      
              )}
          </ul>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );


export default App;
