import { useEffect } from 'react';
import './Feed.css'
import FeedService from '../../../services/feed';
import Post from '../post/Post';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../common/loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/feedSlice';
import useService from '../../../hooks/useService';

function Feed(): JSX.Element {
    const feeds = useAppSelector(state => state.feed.posts);
    const isNewContent = useAppSelector(state => state.feed.needReload);
    const dispatch = useAppDispatch()
    const feedService = useService(FeedService)

    useTitle("SN - Feed")

    useEffect(() => {
        if(feeds.length === 0){
            feedService.getFeed()
            .then(posts => dispatch(init(posts)))
            .catch(alert)
        }
    }, [])

    async function reload() {
        try {
            feedService.getFeed()
                .then(posts => dispatch(init(posts)))
                .catch(alert)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='Feed'>
            { feeds.length === 0 && <Loading />}

            { feeds.length > 0 && <>
                {isNewContent && <div>
                    You have new posts in your feed.
                    <button onClick={reload}>Reload Feed</button>
                </div>
                }
                
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