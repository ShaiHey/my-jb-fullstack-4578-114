import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css'
import { useEffect, useState } from 'react';
import profile from '../../../services/profile';
import { useForm } from 'react-hook-form';
import PostDraft from '../../../models/post/PostDraft';
import LoadingButton from '../../common/loading-button/LoadingButton';
import Loading from '../../common/loading/Loading';

function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { register, handleSubmit, formState, reset } = useForm<PostDraft>()
    const navigate = useNavigate()
    const [loadingPage, setLoadingPage] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            profile.getPost(id)
                .then(data => {
                    setLoadingPage(false)
                    reset(data)
                })
                .catch(alert)
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                await profile.update(id, draft)
                navigate('/profile')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='EditPost'>
            {loadingPage ? <Loading /> :

                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" {...register('title', {
                        required: {
                            value: true,
                            message: "You must provide a title"
                        },
                        minLength: {
                            value: 10,
                            message: "Title must be 10 chars long"
                        }
                    })} />
                    <span className='error'>{formState.errors.title?.message}</span>
                    <textarea {...register('body', {
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
                        buttonText='Update Post'
                        loadingText='Updating post'
                    />
                </form>
            }
        </div>
    )
}

export default EditPost;