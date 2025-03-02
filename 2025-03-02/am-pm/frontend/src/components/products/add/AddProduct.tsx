import { useEffect, useState } from 'react';
import './AddProduct.css'
import Category from '../../../models/category/Category';
import categoriesService from '../../../services/categories';
import Draft from '../../../models/product/Draft';
import { useForm } from 'react-hook-form';
import productsService from '../../../services/products';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

function AddProduct(): JSX.Element {

    useTitle("AM:PM - Add product")

    const [ categories, setCategories ] = useState<Category[]>([]);
    const { register, handleSubmit, formState } = useForm<Draft>()
    const navigate = useNavigate()

    useEffect(() => {
        categoriesService.getAllCategories()
            .then(setCategories)
            .catch(alert)
    }, [])

    async function submit(draft: Draft) {
        try {
            await productsService.add(draft)
            alert("Added product")
            navigate('/products/list')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='AddProduct'>
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('categoryId', {
                    required: {
                        value: true,
                        message: "Missing category"
                    }
                })}>
                    <option value="" disabled selected>Please select category</option>
                    {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.categoryId?.message}</span>

                <input type="text" placeholder='product name' {...register('name', {
                    required: {
                        value: true,
                        message: "Missing name"
                    }
                })}/>
                <span className='error'>{formState.errors.name?.message}</span>
                
                <input type="number" placeholder='product price' {...register('price', {
                    required: {
                        value: true,
                        message: "Missing price"
                    }
                })}/>
                <span className='error'>{formState.errors.price?.message}</span>

                <label>Production date</label>
                <input type="datetime-local" {...register('productionTime', {
                    required: {
                        value: true,
                        message: "Missing production date"
                    }
                })}/>
                <span className='error'>{formState.errors.productionTime?.message}</span>

                <label>Expiration date</label>
                <input type="datetime-local" {...register('expirationTime', {
                    required: {
                        value: true,
                        message: "Missing expiration date"
                    }
                })}/>
                <span className='error'>{formState.errors.expirationTime?.message}</span>
                <button>Add product</button>
            </form>
        </div>
    )
}

export default AddProduct;