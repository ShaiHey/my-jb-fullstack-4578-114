import { useEffect, useState } from 'react';
import './Profile.css'
import PostModel from '../../../models/post/Post';
import profile from '../../../services/profile';
import Post from '../post/Post';

function Profile(): JSX.Element {
    const [posts, setPosts] = useState<PostModel[]>([]);

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

    function remove(id: string): void {
        const index = posts.findIndex(post => post.id === id);
        if(index > -1) {
            const postsAfterRemoval = [...posts]
            postsAfterRemoval.splice(index, 1)
            setPosts(postsAfterRemoval)
        }
    }

    return (
        <div className='Profile'>
            {posts.map(post =>
                <Post
                    key={post.id}
                    post={post}
                    remove={remove}
                    isAllowActions={true}
                >
                </Post>)}
        </div>
    )
}

export default Profile;