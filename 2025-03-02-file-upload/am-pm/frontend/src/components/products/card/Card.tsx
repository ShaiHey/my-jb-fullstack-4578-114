import Product from '../../../models/product/Product';
import productsService from '../../../services/products';
import './Card.css';

interface CardProps {
    product: Product
    removeProduct(id: string): void;
}

function Card({ product, removeProduct }: CardProps): JSX.Element {
    const { id, name, price, expirationTime } = product

    const formattedDate = new Date(expirationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    async function remove() {
        try {
            await productsService.remove(id)
            removeProduct(id)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='Card'>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Expiration: {formattedDate}</p>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default Card;