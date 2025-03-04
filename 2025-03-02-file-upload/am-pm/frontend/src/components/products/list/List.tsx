import { ChangeEvent, useEffect, useState } from 'react';
import './List.css';
import Category from '../../../models/category/Category';
import Product from '../../../models/product/Product';
import categoriesService from '../../../services/categories';
import Card from '../card/Card';
import productsService from '../../../services/products';
import useTitle from '../../../hooks/useTitle';

function List(): JSX.Element {

    useTitle("AM:PM - Products")

    const [ categories, setCategories ] = useState<Category[]>([]);
    const [ products, setProducts ] = useState<Product[]>([]);

    useEffect(() => {
        categoriesService.getAllCategories()
            .then(setCategories)
            .catch(alert)
    }, [])

    async function categoryChanged(event: ChangeEvent<HTMLSelectElement>) {
        try {
            const selectedCategoryId = event.currentTarget.value;
            const products = await productsService.getPerCategory(selectedCategoryId);
            setProducts(products);
        } catch (error) {
            alert(error)
        }
    }

    function removeProduct(id: string) {
        setProducts(products.filter(p => p.id !== id))
    }

    return (
        <div className='List'>
            <select onChange={categoryChanged}>
                <option value="" disabled selected>Please select category</option>
                {categories.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
            </select>

            <div className='CardContainer'>
                {products.map(p => <Card 
                    key={p.id}
                    product={p}
                    removeProduct={removeProduct}
                />)}
            </div>
        </div>
    )
}

export default List;