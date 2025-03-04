import { useEffect } from 'react';
import './Feed.css'
import FeedService from '../../../services/feed';
import Post from '../post/Post';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../common/loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/feedSlice';
import useService from '../../../hooks/useService';
import { ToastContainer, toast } from 'react-toastify';
import { initialNewPost } from '../../../redux/profileSlice';

function Feed(): JSX.Element {
    const feeds = useAppSelector(state => state.feed.posts);
    const isNewContent = useAppSelector(state => state.feed.needReload);
    const isLoaded = useAppSelector(state => state.feed.postLoaded)
    const dispatch = useAppDispatch()
    const feedService = useService(FeedService)

    useTitle("SN - Feed")

    useEffect(() => {
        if(feeds.length === 0){
            feedService.getFeed()
            .then(posts => dispatch(init(posts)))
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
        }
        dispatch(initialNewPost())
    }, [])

    async function reload() {
        feedService.getFeed()
            .then(posts => dispatch(init(posts)))
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
    }

    return (
        <div className='Feed'>
            { !isLoaded && feeds.length === 0 && <Loading />}

            { isLoaded && feeds.length === 0 && <h1>Your feed looks a bit empty! Start following people to see their posts here.</h1>}

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

            <ToastContainer />
        </div>
    )
}

export default Feed;