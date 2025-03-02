import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import './Gifts.css';
import audiencesService from '../../../services/targetAudience';
import { init } from '../../../redux/audienceSlice';
import { init as initGift } from '../../../redux/giftslice';
import useTitle from '../../../hooks/useTitle';
import giftService from '../../../services/gift';
import GiftCard from '../giftCard/GiftCard';

function Gifts(): JSX.Element {
    const audienceState = useAppSelector(state => state.audiences.audience);
    const gifts = useAppSelector(state => state.gifts.gifts);
    const dispatch = useAppDispatch();
    const [selectedAudience, setSelectedAudience] = useState<string>('');

    useTitle("GiftShop - Gifts");

    useEffect(() => {
        audiencesService.getTargetAudience()
            .then(audiences => {
                dispatch(init(audiences));
                if (audiences.length > 0) {
                    setSelectedAudience(audiences[0].id);
                }
            });
    }, []);

    useEffect(() => {
        if (selectedAudience) {
            giftService.getGiftByTarget(selectedAudience)
                .then(gifts => dispatch(initGift(gifts)));
        }
    }, [selectedAudience]);

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAudience(event.target.value);
    }

    return (
        <div className='Gifts'>
            <select name="audience" id="audience" onChange={handleCategoryChange} value={selectedAudience}>
                {audienceState.map(a => (
                    <option key={a.id} value={a.id}>{a.type}</option>
                ))}
            </select>

            <div className="cards">
                {gifts.map(g => (
                    <GiftCard key={g.id} {...g} />
                ))}
            </div>
        </div>
    );
}

export default Gifts;