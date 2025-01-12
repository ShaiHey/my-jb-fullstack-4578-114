import PostModel from '../../../models/post/Post';
import './Post.css'

interface PostProps {
    post: PostModel
}

function Post({ post }: PostProps): JSX.Element {
    const { title, body, createdAt} = post
    const { name } = post.user
    
    return (
        <div className='Post'>
            <div>{title}</div>
            <div>
                by {name} at {createdAt}
            </div>
            <div>{body}</div>
        </div>
    )
}

export default Post;