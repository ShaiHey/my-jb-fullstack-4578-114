import { useForm } from 'react-hook-form';
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft';
import profile from '../../../services/profile';
import Post from '../../../models/post/Post';

interface NewPostProps {
    addPost(post: Post): void;
}

function NewPost({ addPost }: NewPostProps): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

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
                <button>Publish Post</button>
            </form>
        </div>
    )
}

export default NewPost;