import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Feed } from './components/Feed.js';

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:5001/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>RSS Feed</h1>
        <div className="logo-container">
          <img
            src='https://cdn-images-1.medium.com/max/606/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png'
            alt='Netflix Logo'
            className="logo"
          />
        </div>
      </header>

      <div className="feed-container">
        {articles.map((items, i) => {
          return items.map((item, j) => {
            return (
              <Feed
                key={j}
                title={item.title}
                link={item.link}
                date={item.pubDate}
              />
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
