import { useNavigate } from 'react-router-dom';
import PostModel from '../../../models/post/Post';
import profile from '../../../services/profile';
import './Post.css'
import PostComments from '../../comments/post-comments/PostComments';
import { useState } from 'react';
import LoadingButton from '../../common/loading-button/LoadingButton';
import { useAppDispatch } from '../../../redux/hooks';
import { removePost } from '../../../redux/profileSlice';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
}

function Post({ post, isAllowActions }: PostProps): JSX.Element {
    const { id, title, body, createdAt, comments} = post
    const { name } = post.user
    const navigate = useNavigate()
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
    const dispatch = useAppDispatch()

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    async function deleteMe() {
        if(confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                setLoadingDelete(true)
                await profile.remove(id)
                dispatch(removePost({id}))
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
                comments={comments}
                postId={id}
            />
        </div>
    )
}

export default Post;