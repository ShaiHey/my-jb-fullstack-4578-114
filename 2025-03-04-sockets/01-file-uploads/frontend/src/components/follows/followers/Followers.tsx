import { useEffect } from 'react';
import './Followers.css'
import FollowersService from '../../../services/followers';
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';
import useService from '../../../hooks/useService';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followersSlice';
import { ToastContainer, toast } from 'react-toastify';

function Followers(): JSX.Element {
    const followers = useAppSelector(state => state.followers.followers)
    const isLoaded = useAppSelector(state => state.followers.followersLoaded)
    const dispatch = useAppDispatch()
    const followersService = useService(FollowersService)
    

    useEffect(() => {
        followersService.getFollowers()
            .then(followers => dispatch(init(followers)))
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
    }, [])

    return (
        <div className='Followers'>

            { !isLoaded && followers.length === 0 && <Loading />}

            { isLoaded && followers.length === 0 && <h1>You're just getting started! Share posts to attract followers.</h1>}

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

            <ToastContainer />
        </div>
    )
}

export default Followers;