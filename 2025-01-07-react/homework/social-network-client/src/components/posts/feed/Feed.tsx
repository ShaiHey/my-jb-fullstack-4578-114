import { useEffect, useState } from 'react';
import './Feed.css'
import Post from '../../../models/post/Post';
import feed from '../../../services/feed';

function Feed(): JSX.Element {
    const [feeds, setFeeds] = useState<Post[]>([])

    useEffect(() => {
        feed.getFeed()
            .then(setFeeds)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {feeds.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}

export default Feed;