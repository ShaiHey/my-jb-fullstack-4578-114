import { useForm } from 'react-hook-form';
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft';
import CommentModel from '../../../models/comment/Comment';
import comments from '../../../services/comments';
import LoadingButton from '../../common/loading-button/LoadingButton';

interface newCommentProps {
    postId: string;
    onNewComment (newComment: CommentModel): void;
}

function NewComment({ postId, onNewComment }: newCommentProps): JSX.Element {
    const { register, handleSubmit, formState, reset } = useForm<CommentDraft>()

    async function submit(draft: CommentDraft) {
        try {
            const addedComment = await comments.addComment(postId, draft)
            onNewComment(addedComment);
            reset()
        } catch (error) {
            alert(error)
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
        </div>
    )
}

export default NewComment;