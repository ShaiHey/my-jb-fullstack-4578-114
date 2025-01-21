import { useEffect } from 'react';
import './Followers.css'
import FollowersService from '../../../services/followers';
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';
import useService from '../../../hooks/useService';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followersSlice';

function Followers(): JSX.Element {
    const followers = useAppSelector(state => state.followers.followers)
    const dispatch = useAppDispatch()
    const followersService = useService(FollowersService)

    useEffect(() => {
        followersService.getFollowers()
            .then(followers => dispatch(init(followers)))
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>

            { followers.length === 0 && <Loading />}

            {
                followers.length > 0 && <>
                    <h2>My followers :</h2>
                    <div className='boxContainer'>
                        {followers.map(followers =>
                            <Follow
                                key={followers.id}
                                follow={followers}
                            >
                            </Follow>)}
                    </div>
                </>
            }
        </div>
    )
}

export default Followers;