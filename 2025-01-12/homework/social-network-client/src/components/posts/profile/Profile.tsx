import { useEffect, useState } from 'react';
import './Profile.css'
import PostModel from '../../../models/post/Post';
import profile from '../../../services/profile';
import Post from '../post/Post';
import NewPost from '../new/NewPost';

function Profile(): JSX.Element {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        document.title = "SN - Profile"
    }, [])

    useEffect(() => {
        // useEffect disallows the callback function to be async
        // so we either use then:
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

    function addPost(post: PostModel): void {
        setPosts([post, ...posts])
    }

    return (
        <div className='Profile'>
            <NewPost 
                addPost={addPost}
            />
            {posts.map(post =>
                <Post
                    key={post.id}
                    post={post}
                    remove={remove}
                    isAllowActions={true}
                />
            )}
        </div>
    )
}

export default Profile;