import Comment from '../comment/Comment';
import CommentModel from '../../../models/comment/Comment';
import './PostComments.css'
import NewComment from '../new-comment/NewComment';
import { useState } from 'react';

interface CommentsProps {
    initialComments: CommentModel[];
    postId: string;
}

function PostComments({ initialComments, postId }: CommentsProps): JSX.Element {
    const [commentsList, setCommentsList] = useState<CommentModel[]>(initialComments);

    function handleNewComment(newComment: CommentModel) {
        setCommentsList(prevComments => [newComment, ...prevComments]);
    }
    
    return (
        <div className='PostComments'>
            <p>Total comments : { commentsList.length } </p>
            <NewComment 
                postId={postId}
                onNewComment={handleNewComment}
            />
            {commentsList.map(comment => 
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            )}
        </div>
    )
}

export default PostComments;