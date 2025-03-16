import { useEffect } from 'react';
import './Profile.css'
import profile from '../../../services/profile';
import Post from '../post/Post';
import NewPost from '../new/NewPost';
import Loading from '../../common/loading/Loading';
import useTitle from '../../../hooks/useTitle';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/profileSlice';
import useService from '../../../hooks/useService';
import { ToastContainer, toast } from 'react-toastify';

function Profile(): JSX.Element {
    const posts = useAppSelector(state => state.profile.posts)
    const isLoaded = useAppSelector(state => state.profile.postLoaded)
    const newPostId = useAppSelector(state => state.profile.newPostId)
    const dispatch = useAppDispatch()
    const profileService = useService(profile)

    useTitle("SN - Profile")

    useEffect(() => {
        if(posts.length === 0){
            profileService.getProfile()
            .then(posts => dispatch(init(posts)))
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
        }
    }, [])

    return (
        <div className='Profile'>

            { !isLoaded && posts.length === 0 && <Loading />}

            { isLoaded && posts.length === 0 && <>
                <h1>Ready to make your mark? Create your first post !</h1>
                <NewPost />
            </>}

            { posts.length > 0 && <>
                <NewPost />
                {posts.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                        isAllowActions={true}
                        isNew={post.id === newPostId}
                    />
                )}
            </>}

            <ToastContainer />
        </div>
    )
}

export default Profile;