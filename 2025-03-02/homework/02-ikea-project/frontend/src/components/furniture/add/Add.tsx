import { useForm } from 'react-hook-form'
import './Add.css'
import Draft from '../../../models/furniture/Draft'
import { useEffect, useState } from 'react'
import FurnitureType from '../../../models/furniture-type/FurnitureType'
import furnitureTypeService from '../../../services/furnitureType'
import furnitureService from '../../../services/furniture'
import { useNavigate } from 'react-router-dom'
import useTitle from '../../../hooks/useTitle'

function Add(): JSX.Element {
    
    useTitle("IKEA - Add Furniture")

    const { handleSubmit, register, formState } = useForm<Draft>()
    const [ furnitureType, setFurnitureType ] = useState<FurnitureType[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        furnitureTypeService.getAllFurnitureType()
            .then(setFurnitureType)
            .catch(alert)
    }, [])

    async function submit(draft: Draft) {
        await furnitureService.create(draft)
        alert("You created new furniture")
        navigate('/furniture')
    }

    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name:</label>
                <select {...register('furnitureTypeId', {
                    required: {
                        value: true,
                        message: "Missing furniture type"
                    }
                })}>
                    <option value="" selected disabled>Select furniture type</option>
                    {furnitureType.map(ft => <option key={ft.id} value={ft.id}>{ft.name}</option>)}
                </select>
                <span className='error'>{formState.errors.furnitureTypeId?.message}</span>

                <label>Dimensions:</label>
                <input type="text" placeholder='Please set dimensions' {...register('dimensions', {
                    required: {
                        value: true,
                        message: "Missing dimensions"
                    }
                })} />
                <span className='error'>{formState.errors.dimensions?.message}</span>

                <label>Color:</label>
                <input type="text" placeholder='Please set color' {...register('color', {
                    required: {
                        value: true,
                        message: "Missing color"
                    }
                })} />
                <span className='error'>{formState.errors.color?.message}</span>

                <label>Price:</label>
                <input type="number" placeholder='Please set price' {...register('price', {
                    required: {
                        value: true,
                        message: "Missing price"
                    },
                    min: {
                        value: 1,
                        message: "Price negative not allowed"
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <button>Add</button>
            </form>
        </div>
    )
}

export default Add;