import { useForm } from 'react-hook-form';
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft';
import profile from '../../../services/profile';
import Post from '../../../models/post/Post';

interface NewPostProps {
    addPost(post: Post): void;
}

function NewPost({ addPost }: NewPostProps): JSX.Element {

    const { register, handleSubmit, reset } = useForm<PostDraft>()

    async function submit(draft: PostDraft) {
        try {
            const newPost = await profile.create(draft)
            reset()
            addPost(newPost)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder='Please enter a title post' {...register('title')}/>
                <textarea placeholder='Please enter a body post' {...register('body')}></textarea>
                <button>Publish</button>
            </form>
        </div>
    )
}

export default NewPost;