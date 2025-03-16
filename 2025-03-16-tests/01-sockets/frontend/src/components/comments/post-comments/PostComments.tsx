import Comment from '../comment/Comment';
import CommentModel from '../../../models/comment/Comment';
import './PostComments.css'
import NewComment from '../new-comment/NewComment';

interface CommentsProps {
    comments: CommentModel[];
    postId: string;
}

function PostComments({ comments, postId }: CommentsProps): JSX.Element {
    console.log(comments)
    return (
        <div className='PostComments'>
            <p>Total comments : { comments.length } </p>
            <NewComment 
                postId={postId}
            />
            {comments.map(comment => 
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            )}
        </div>
    )
}

export default PostComments;