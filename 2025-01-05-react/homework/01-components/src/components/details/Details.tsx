import './Details.css'
import Cat1Image from '../../assets/images/cat1.jpeg'
import Cat2Image from '../../assets/images/cat2.jpg'
import Cat3Image from '../../assets/images/cat3.jpeg'

function Details(): JSX.Element {
    const allImages = [Cat1Image, Cat2Image, Cat3Image];

    function getRandomImageIndex(): number {
        return Math.floor(Math.random() * allImages.length);
    }

    return (
        <div className='Details'>
            <h2>Who am I?</h2>
            <p>I'm a web developer with expertise in both frontend and backend technologies.</p>
            <p>I specialize in HTML, CSS, JavaScript, TypeScript, and React, as well as databases like MySQL.</p>
            <p>Additionally, I have experience with Lua, particularly for scripting and server creation for GTA RP (Grand Theft Auto Roleplay).</p>
            <div id='imageDiv'>
                <img src={allImages[getRandomImageIndex()]} />
            </div>
        </div>
    )
}

export default Details;