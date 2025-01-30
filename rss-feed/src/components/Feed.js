import { React} from 'react';

export const Feed = ({title, link, date}) => {

    const Formatted = { day: "numeric", month: "long", year: "numeric"};
    let articleDate = new Date(date).toLocaleDateString("en-GB", Formatted)

    return (
        <div>
            {title}
            {articleDate}
        </div>
    )
}

export default Feed;