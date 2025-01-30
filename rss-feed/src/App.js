import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Feed} from './components/Feed.js';

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try{
      const res = await axios.get("http://localhost:5001/");
      setArticles(res.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="App">
          <h1> RSS Feed </h1>
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
  );
}

export default App;
