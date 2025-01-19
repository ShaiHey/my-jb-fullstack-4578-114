import { useEffect } from 'react';
import './Feed.css'
import feed from '../../../services/feed';
import Post from '../post/Post';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../common/loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/feedSlice';

function Feed(): JSX.Element {
    const feeds = useAppSelector(state => state.feed.posts);
    const dispatch = useAppDispatch()

    useTitle("SN - Feed")

    useEffect(() => {
        if(feeds.length === 0){
            feed.getFeed()
            .then(posts => dispatch(init(posts)))
            .catch(alert)
        }
    }, [])

    return (
        <div className='Feed'>
            { feeds.length === 0 && <Loading />}

            { feeds.length > 0 && <>
                {feeds.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                    />
                )}
            </> }
        </div>
    )
}

export default Feed;