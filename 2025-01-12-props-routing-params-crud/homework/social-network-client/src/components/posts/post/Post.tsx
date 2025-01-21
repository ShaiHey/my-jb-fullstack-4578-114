import { useNavigate } from 'react-router-dom';
import PostModel from '../../../models/post/Post';
import profile from '../../../services/profile';
import './Post.css'
import PostComments from '../../comments/post-comments/PostComments';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    remove?(id: string): void;
}

function Post({ post, isAllowActions, remove }: PostProps): JSX.Element {
    const { id, title, body, createdAt, comments} = post
    const { name } = post.user
    const navigate = useNavigate()

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

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

    function editMe() {
        navigate(`/edit/${id}`)
    }
    
    return (
        <div className='Post'>
            <div>{title}</div>
            <div>
                by {name} on {formattedDate}
            </div>
            <div>{body}</div>
            {isAllowActions && 
                <div>
                    <button onClick={editMe}>Edit</button>
                    <button onClick={deleteMe}>Delete</button>
                </div>
            }
            <PostComments
                initialComments={comments}
                postId={id}
            />
        </div>
    )
}

export default Post;