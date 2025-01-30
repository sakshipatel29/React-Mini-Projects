import cors from 'cors';
import express from 'express';
import Parser from 'rss-parser';

const parser = new Parser();

let articles = [];

(async () => {
    const feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
    console.log(feed.title);

    feed.items.forEach(item => {
        articles.push([item]);
    });
})();

let app = express();
app.use(cors());

app.get('/', (req,res) => {
    res.send(articles);
});



const server = app.listen('5001', () => {
    console.log("App is running at http://localhost:5001");
})

export default server;