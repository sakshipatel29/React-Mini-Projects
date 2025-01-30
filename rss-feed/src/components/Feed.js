import React from 'react';
import './Feed.css';

export const Feed = ({title, link, date}) => {
    const Formatted = { day: "numeric", month: "long", year: "numeric"};
    let articleDate = new Date(date).toLocaleDateString("en-GB", Formatted);

    return (
        <div className="feed-card">
            <a href={link} target="_blank" rel="noopener noreferrer" className="feed-link">
                <h3 className="feed-title">{title}</h3>
                <p className="feed-date">{articleDate}</p>
            </a>
        </div>
    );
}

export default Feed;
