import { useEffect, useState } from 'react';
import './List.css';
import Furniture from '../../../models/furniture/Furniture';
import furnitureService from '../../../services/furniture';
import Card from '../card/Card';
import useTitle from '../../../hooks/useTitle';

function List(): JSX.Element {

    useTitle("IKEA - Furniture List")

    const [ furniture, setFurniture ] = useState<Furniture[]>([])

    useEffect(() => {
        furnitureService.getAllFurniture()
            .then(setFurniture)
            .catch(alert)
    }, [])

    return (
        <div className='List'>
            <h2>Furniture List</h2>

            <div className='CardContainer'>
                {furniture.map(f => <Card key={f.id} furniture={f}/>)}
            </div>
        </div>
    )
}

export default List;