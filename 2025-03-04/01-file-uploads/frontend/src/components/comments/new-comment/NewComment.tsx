import { useForm } from 'react-hook-form';
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft';
import CommentsService from '../../../services/comments';
import LoadingButton from '../../common/loading-button/LoadingButton';
import { useAppDispatch } from '../../../redux/hooks';
import { addComment } from '../../../redux/profileSlice';
import { addComment as addCommentFeed } from '../../../redux/feedSlice';
import useService from '../../../hooks/useService';
import { ToastContainer, toast } from 'react-toastify';
import { AxiosError } from 'axios';

interface NewCommentProps {
    postId: string;
}

function NewComment({ postId }: NewCommentProps): JSX.Element {
    const { register, handleSubmit, formState, reset } = useForm<CommentDraft>()
    const dispatch = useAppDispatch()
    const commentsService = useService(CommentsService)

    async function submit(draft: CommentDraft) {
        try {
            const addedComment = await commentsService.addComment(postId, draft)
            reset()
            dispatch(addComment(addedComment))
            dispatch(addCommentFeed(addedComment))
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data || error.message);
            } else {
                toast.error("An unknown error has occurred");
            }
        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea placeholder='Post your replay' {...register('body', {
                    required: {
                        value: true,
                        message: "You must provide a replay"
                    },
                    minLength: {
                        value: 20,
                        message: "Replay must be 20 chars long"
                    }
                })}></textarea>
                <span className='error'>{formState.errors.body?.message}</span>
                <LoadingButton
                    isSubmitting={formState.isSubmitting}
                    buttonText='Replay'
                    loadingText='Publishing comment'
                />
            </form>

            <ToastContainer />
        </div>
    )
}

export default NewComment;