import { useEffect, useState } from 'react';
import './Profile.css'
import Post from '../../../models/post/Post';
import profile from '../../../services/profile';

function Profile(): JSX.Element {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        // useEffect disallows the callback function to be async
        // 
        profile.getProfile()
            .then(setPosts)
            .catch(alert)

        // Or IIFE
        // (async () => {
        //     try {
        //         const profilePosts = await profile.getProfile()
        //         setPosts(profilePosts) 
        //     } catch (error) {
        //         alert(error)
        //     }
        // })()
    }, [])

    return (
        <div className='Profile'>
            <ul>
                {posts.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}

export default Profile;