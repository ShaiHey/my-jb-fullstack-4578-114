import Furniture from '../../../models/furniture/Furniture'
import './Card.css'

interface CardProps {
    furniture: Furniture
}

function Card({ furniture }: CardProps): JSX.Element {
    return (
        <div className='Card'>
            <p>Name: {furniture.furnitureType.name}</p>
            <p>Dimensions: {furniture.dimensions}</p>
            <p>Color: {furniture.color}</p>
            <p>Price: {furniture.price}</p>
        </div>
    )
}

export default Card;