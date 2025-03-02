import { deleteGift } from "../../../redux/giftslice";
import { useAppDispatch } from "../../../redux/hooks";
import giftService from "../../../services/gift";
import "./GiftCard.css";

interface GiftCardProps {
    id: string;
    name: string;
    description: string;
    price: string;
    discount: string;
}

function GiftCard({ id, name, description, price, discount }: GiftCardProps): JSX.Element {
    
    const dispatch = useAppDispatch();

    async function remove() {
        try {
            await giftService.delete(id);
            dispatch(deleteGift({id}));
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="GiftCard">
            <div>Name: {name}</div>
            <div>Description: {description}</div>
            <div>Price: {price} $</div>
            <div>Discount: {discount} %</div>
            <button onClick={remove}>Delete</button>
        </div>
    );
}

export default GiftCard;
