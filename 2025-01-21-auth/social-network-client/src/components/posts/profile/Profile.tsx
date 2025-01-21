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

function Profile(): JSX.Element {
    const posts = useAppSelector(state => state.profile.posts)
    const dispatch = useAppDispatch()
    const profileService = useService(profile)

    useTitle("SN - Profile")

    useEffect(() => {
        if(posts.length === 0){
            profileService.getProfile()
            .then(posts => dispatch(init(posts)))
            .catch(alert)
        }
    }, [])

    return (
        <div className='Profile'>

            { posts.length === 0 && <Loading />}

            { posts.length > 0 && <>
                <NewPost />
                {posts.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                        isAllowActions={true}
                    />
                )}
            </>}
        </div>
    )
}

export default Profile;