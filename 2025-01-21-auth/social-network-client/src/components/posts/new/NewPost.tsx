import { useForm } from 'react-hook-form';
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft';
import ProfileService from '../../../services/profile';
import LoadingButton from '../../common/loading-button/LoadingButton';
import { useAppDispatch } from '../../../redux/hooks';
import { addPost } from '../../../redux/profileSlice';
import useService from '../../../hooks/useService';

function NewPost(): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    const dispatch = useAppDispatch()
    const profileService = useService(ProfileService)

    async function submit(draft: PostDraft) {
        try {
            const newPost = await profileService.create(draft)
            reset()
            dispatch(addPost(newPost))
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder='Please enter a title post' {...register('title', {
                    required: {
                        value: true,
                        message: "You must provide a title"
                    },
                    minLength: {
                        value: 10,
                        message: "Title must be 10 chars long"
                    }
                })}/>
                <span className='error'>{formState.errors.title?.message}</span>
                <textarea placeholder='Please enter a body post' {...register('body', {
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
                    buttonText='Publish Post'
                    loadingText='Creating new post'
                />
            </form>
        </div>
    )
}

export default NewPost;