import PostModel from '../../../models/post/Post';
import profile from '../../../services/profile';
import './Post.css'

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    remove?(id: string): void;
}

function Post({ post, isAllowActions, remove }: PostProps): JSX.Element {
    const { id, title, body, createdAt} = post
    const { name } = post.user

    async function deleteMe() {
        if(remove && confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                await profile.remove(id)
                remove(id);
                // I was able to delete from the server,
                // this is the point to affect the UI
                // In other words, we need to change the state
            } catch (error) {
                alert(error)
            }
        }
    }
    
    return (
        <div className='Post'>
            <div>{title}</div>
            <div>
                by {name} at {createdAt}
            </div>
            <div>{body}</div>
            {isAllowActions && 
                <div>
                    <button>Edit</button>
                    <button onClick={deleteMe}>Delete</button>
                </div>
            }
        </div>
    )
}

export default Post;