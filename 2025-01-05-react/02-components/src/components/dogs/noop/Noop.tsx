import './Noop.css'

function Noop(): JSX.Element {
    return (
        <div className='Noop'>
            <div>Noop</div>
            <div>Age: 4</div>
            <div><img src="noop.jpg" alt="" /></div>
        </div>
    )
}

export default Noop;