import { useEffect } from 'react';
import './Following.css'
import followingService from '../../../services/following';
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followingSlice';

function Following(): JSX.Element {
    // const [following, setFollowing] = useState<User[]>([]);
    const following = useAppSelector(state => state.following.following)

    const dispatch = useAppDispatch()

    useEffect(() => {
        followingService.getFollowing()
            .then(following => dispatch(init(following)))
            .catch(alert)
    }, [ dispatch ])

    return (
        <div className='Following'>

            { following.length === 0 && <Loading />}

            { following.length > 0 && <>
                <h2>I'm following :</h2>
                <div className='boxContainer'>
                    {following.map(following =>
                        <Follow
                            key={following.id}
                            follow={following}
                        >
                        </Follow>)}
                </div>
            </>}
        </div>
    )
}

export default Following;