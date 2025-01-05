import './Demo.css'

function Demo(): JSX.Element {

    // Primitives
    const name = "Jason"
    const age = 22
    const isAdult = age > 18
    const grades = [100, 90, 95]

    const dogs = [
        {
            id: 1,
            name: "Cheif",
            age: 6
        },
        {
            id: 2,
            name: "Noop",
            age: 4
        }
    ]

    function sayHi() {
        console.log("Hi")
    }

    return (
        <div className='Demo'>
            <p>Hello {name}</p>
            <p>You are {age} years old</p>
            <p>You are an {isAdult ? "Adult" : "Child"}</p>
            {/* <p>Your grades are {grades}</p> */}
            <p>Your grades are:</p>
            <ul>
                {grades.map((grade, i) => <li key={i}>{grade}</li>)}
            </ul>
            <button onClick={sayHi}>Say Hi</button>
            <p>Dogs:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map(({id, name, age}) => 
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Demo;