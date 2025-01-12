import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css'
import { useEffect } from 'react';
import profile from '../../../services/profile';
import { useForm } from 'react-hook-form';
import PostDraft from '../../../models/post/PostDraft';

function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { register, handleSubmit, formState, reset } = useForm<PostDraft>()
    const navigate = useNavigate()

    useEffect(() => {
        if(id) {
            profile.getPost(id)
                .then(reset)
                .catch(alert)
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            if(id) {
                await profile.update(id, draft)
                navigate('/profile')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='EditPost'>
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
                <button>Update Post</button>
            </form>
        </div>
    )
}

export default EditPost;