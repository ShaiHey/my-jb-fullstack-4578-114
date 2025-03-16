import { useNavigate } from 'react-router-dom';
import PostModel from '../../../models/post/Post';
import ProfileService from '../../../services/profile';
import './Post.css'
import PostComments from '../../comments/post-comments/PostComments';
import { useState } from 'react';
import LoadingButton from '../../common/loading-button/LoadingButton';
import { useAppDispatch } from '../../../redux/hooks';
import { removePost } from '../../../redux/profileSlice';
import useService from '../../../hooks/useService';
import { ToastContainer, toast } from 'react-toastify';
import { AxiosError } from 'axios';

interface PostProps {
    post: PostModel;
    isAllowActions?: boolean;
    isNew?: boolean;
}

function Post({ post, isAllowActions, isNew }: PostProps): JSX.Element {
    const { id, title, body, createdAt, comments, imageUrl } = post
    const { name } = post.user
    const navigate = useNavigate()
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const profileService = useService(ProfileService);

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    async function deleteMe() {
        if(confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                setLoadingDelete(true)
                await profileService.remove(id)
                dispatch(removePost({id}))
            } catch (error) {
                if (error instanceof AxiosError) {
                    toast.error(error.response?.data || error.message);
                } else {
                    toast.error("An unknown error has occurred");
                }
            } finally {
                setLoadingDelete(false);
            }
        }
    }

    function editMe() {
        navigate(`/edit/${id}`)
    }
    
    return (
        <div className={`Post ${isNew ? 'NewPostAnimation' : ''}`}>
            <div>{title}</div>
            <div>
                by {name} on {formattedDate}
            </div>
            {imageUrl && <div>
                <img src={`${import.meta.env.VITE_AWS_SERVER_URL}/${imageUrl}`} />
            </div>}
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
            <ToastContainer />
        </div>
    )
}

export default Post;