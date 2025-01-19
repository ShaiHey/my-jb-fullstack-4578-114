import { useNavigate } from 'react-router-dom';
import PostModel from '../../../models/post/Post';
import profile from '../../../services/profile';
import './Post.css'
import PostComments from '../../comments/post-comments/PostComments';
import { useState } from 'react';
import LoadingButton from '../../common/loading-button/LoadingButton';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    remove?(id: string): void;
}

function Post({ post, isAllowActions, remove }: PostProps): JSX.Element {
    const { id, title, body, createdAt, comments} = post
    const { name } = post.user
    const navigate = useNavigate()
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    async function deleteMe() {
        if(remove && confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                setLoadingDelete(true)
                await profile.remove(id)
                remove(id);
                // I was able to delete from the server,
                // this is the point to affect the UI
                // In other words, we need to change the state
            } catch (error) {
                alert(error)
            } finally {
                setLoadingDelete(false);
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
                    <LoadingButton
                        isSubmitting={loadingDelete}
                        buttonText='Delete'
                        loadingText='Deleting post'
                        onClick={deleteMe}
                    />
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