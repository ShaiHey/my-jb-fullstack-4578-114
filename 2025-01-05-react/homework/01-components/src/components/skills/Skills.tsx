import './Skills.css'

function Skills(): JSX.Element {

    const skills = [
        {
            id: 1,
            langName: "HTML",
        },
        {
            id: 2,
            langName: "CSS",
        },
        {
            id: 3,
            langName: "Bootstrap",
        },
        {
            id: 4,
            langName: "JavaScript",
        },
        {
            id: 5,
            langName: "TypeScript",
        },
        {
            id: 6,
            langName: "jQuery",
        },
        {
            id: 7,
            langName: "React",
        },
        {
            id: 8,
            langName: "Vite",
        },        {
            id: 9,
            langName: "MySQL",
        },
        {
            id: 10,
            langName: "Lua",
        }
    ]

    return (
        <div className='Skills'>
            <h2>I know the following technologies:</h2>
            <ul>
                {skills.map(skill => <li key={skill.id}>{skill.langName}</li>)}
            </ul>
        </div>
    )
}

export default Skills;