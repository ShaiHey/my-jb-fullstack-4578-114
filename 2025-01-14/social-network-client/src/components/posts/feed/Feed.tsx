import { useEffect, useState } from 'react';
import './Feed.css'
import PostModel from '../../../models/post/Post';
import feed from '../../../services/feed';
import Post from '../post/Post';
import useTitle from '../../../hooks/useTitle';

function Feed(): JSX.Element {
    const [feeds, setFeeds] = useState<PostModel[]>([])

    useTitle("SN - Feed")

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