import { React} from 'react';

export const Feed = ({title, link, date}) => {

    const Formatted = { day: "numeric", month: "long", year: "numeric"};
    let articleDate = new Date(date).toLocaleDateString("en-GB", Formatted)

    return (
        <>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
            <p>{articleDate}</p>
        </a>
        </>
    )
}

export default Feed;