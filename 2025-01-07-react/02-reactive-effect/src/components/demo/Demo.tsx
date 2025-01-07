import { useEffect, useState } from 'react'
import './Demo.css'

function Demo(): JSX.Element {

    const [animals, setAnimals] = useState<string[]>([])
    const [isDogs, setIsDogs] = useState<boolean>(true)

    // Imaginal server functions
    function getDogs() {
        return ['noop', 'chief', 'toy']
    }

    // Imaginal server functions
    function getCats() {
        return ['gingo', 'eden']
    }

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats())
    }, [isDogs])

    function selectChanged() {
        setIsDogs(!isDogs)
    }

    return (
        <div className='Demo'>
            <select onChange={selectChanged}>
                <option value="dogs">Dogs</option>
                <option value="cats">Cats</option>
            </select>
            <ul>
                {animals.map((animal, i) => <li key={i}>{animal}</li>)}
            </ul>
        </div>
    )
}

export default Demo;