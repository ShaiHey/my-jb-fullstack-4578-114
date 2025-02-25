import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css'
import { useEffect } from 'react';
import ProfileService from '../../../services/profile';
import { useForm } from 'react-hook-form';
import PostDraft from '../../../models/post/PostDraft';
import LoadingButton from '../../common/loading-button/LoadingButton';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { update } from '../../../redux/profileSlice';
import useService from '../../../hooks/useService';
import { ToastContainer, toast } from 'react-toastify';
import { AxiosError } from 'axios';

function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { register, handleSubmit, formState, reset } = useForm<PostDraft>()
    const navigate = useNavigate()
    const editPost = useAppSelector(state => state.profile.posts.find(p => p.id === id))
    const dispatch = useAppDispatch();
    const profileService = useService(ProfileService);

    useEffect(() => {
        if(editPost) reset(editPost);
        else {
            profileService.getPost(id!)
                .then(reset)
                .catch(error => {
                    toast.error(error.response?.data || error.message);
                })
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                const updatingPost = await profileService.update(id, draft)
                dispatch(update(updatingPost))
                navigate('/profile')
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data || error.message);
            } else {
                toast.error("An unknown error has occurred");
            }
        }
    }

    return (
        <div className='EditPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title', {
                    required: {
                        value: true,
                        message: "You must provide a title"
                    },
                    minLength: {
                        value: 10,
                        message: "Title must be 10 chars long"
                    }
                })} />
                <span className='error'>{formState.errors.title?.message}</span>
                <textarea {...register('body', {
                    required: {
                        value: true,
                        message: "You must provide a body"
                    },
                    minLength: {
                        value: 20,
                        message: "Body must be 20 chars long"
                    }
                })}></textarea>
                <span className='error'>{formState.errors.body?.message}</span>
                <LoadingButton
                    isSubmitting={formState.isSubmitting}
                    buttonText='Update Post'
                    loadingText='Updating post'
                />
            </form>
            <ToastContainer />
        </div>
    )
}

export default EditPost;