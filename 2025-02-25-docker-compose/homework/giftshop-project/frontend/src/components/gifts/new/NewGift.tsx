import { useForm } from 'react-hook-form';
import './NewGift.css'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import giftService from '../../../services/gift';
import { addGift } from '../../../redux/giftslice';
import GiftDraft from '../../../models/gifts/GiftDraft';
import audiencesService from '../../../services/targetAudience';
import { useEffect } from 'react';
import { init } from '../../../redux/audienceSlice';

function NewGift(): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<GiftDraft>()
    const audienceState = useAppSelector(state => state.audiences.audience);
    const dispatch = useAppDispatch()

    useEffect(() => {
        audiencesService.getTargetAudience()
            .then(audiences => {
                dispatch(init(audiences));
            });
    }, []);

    async function submit(draft: GiftDraft) {
        try {
            const newGift = await giftService.create(draft);
            reset();
            dispatch(addGift(newGift));
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <div className='NewGift'>
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('targetAudienceId')}>
                    {audienceState.map(a => <option key={a.id} value={a.id}>{a.type}</option>)}
                </select>
                <input type="text" placeholder='Please enter a name' {...register('name', {
                    required: {
                        value: true,
                        message: "Missing name"
                    }
                })}/>
                <span className='error'>{formState.errors.name?.message}</span>
                <input type="text" placeholder='Please enter a description' {...register('description', {
                    required: {
                        value: true,
                        message: "Missing description"
                    }
                })}/>
                <span className='error'>{formState.errors.description?.message}</span>
                <input type="number" placeholder='Please enter a price' {...register('price', {
                    required: {
                        value: true,
                        message: "Missing price"
                    },
                    min: {
                        value: 1,
                        message: "Price can't be negative"
                    }
                })}/>
                <span className='error'>{formState.errors.price?.message}</span>
                <input type="number" placeholder='Please enter a discount' {...register('discount', {
                    required: {
                        value: true,
                        message: "Missing discount"
                    },
                    min: {
                        value: 0,
                        message: "Discount can't be negative"
                    },
                    max: {
                        value: 100,
                        message: "Discount can't exceeds 100"
                    }
                })}/>
                <span className='error'>{formState.errors.discount?.message}</span>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewGift;