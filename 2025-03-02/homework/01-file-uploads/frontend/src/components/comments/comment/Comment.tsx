import CommentModel from '../../../models/comment/Comment';
import './Comment.css'

interface CommentProps {
    comment: CommentModel
}

function Comment({ comment }: CommentProps): JSX.Element {

    const { user: {name}, createdAt, body } = comment

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className='Comment'>
            <div>{body}</div>
            <div>
                by {name} on {formattedDate}
            </div>
        </div>
    )
}

export default Comment;