import { useEffect, useState } from 'react';
import './Feed.css'
import PostModel from '../../../models/post/Post';
import feed from '../../../services/feed';
import Post from '../post/Post';

function Feed(): JSX.Element {
    const [feeds, setFeeds] = useState<PostModel[]>([])

    useEffect(() => {
        document.title = "SN - Feed"
    }, [])

    useEffect(() => {
        feed.getFeed()
            .then(setFeeds)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            {feeds.map(post =>
                <Post
                    key={post.id}
                    post={post}
                />
            )}
        </div>
    )
}

export default Feed;