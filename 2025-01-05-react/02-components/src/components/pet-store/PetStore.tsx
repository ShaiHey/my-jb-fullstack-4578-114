import CatList from '../cat-list/CatList';
import DogList from '../dog-list/DogList';
import './PetStore.css'

function PetStore(): JSX.Element {
    return (
        <div className='PetStore'>
            <DogList/>
            <CatList/>
        </div>
    )
}


export default PetStore;