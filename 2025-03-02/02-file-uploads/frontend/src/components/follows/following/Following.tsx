import { useEffect } from 'react';
import './Following.css'
import Follow from '../../follows/follow/Follow';
import Loading from '../../common/loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followingSlice';
import useService from '../../../hooks/useService';
import FollowingService from '../../../services/following';
import { ToastContainer, toast } from 'react-toastify';

function Following(): JSX.Element {
    const following = useAppSelector(state => state.following.following)
    const isLoaded = useAppSelector(state => state.following.followingLoaded)

    const dispatch = useAppDispatch()

    const followingService = useService(FollowingService)

    useEffect(() => {
        followingService.getFollowing()
            .then(following => dispatch(init(following)))
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
    }, [ dispatch ])

    return (
        <div className='Following'>

            { !isLoaded && following.length === 0 && <Loading />}

            { isLoaded && following.length === 0 && <h1>Discover new people to follow and expand your network !</h1>}

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

            <ToastContainer />
        </div>
    )
}

export default Following;