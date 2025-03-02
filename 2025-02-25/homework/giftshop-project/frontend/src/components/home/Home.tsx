
import useTitle from '../../hooks/useTitle';
import sourceImage from '../../assets/images/pic.jpg'
import './Home.css'

function Home(): JSX.Element {

    useTitle("GiftShop - Home")

    return (
        <div className='Home'>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quis ipsam quos odio nihil consequuntur! Corporis incidunt id quod earum aperiam impedit, provident culpa ullam eum eaque, tempore dolore sequi.
            Ut dolor non mollitia cupiditate. Laborum, quibusdam fugit, optio accusamus est magnam nisi dignissimos quia repellat, ipsa tempore. Facere exercitationem cupiditate at earum veritatis, ipsam dolore nesciunt officiis eveniet! Sunt.
            Dicta corrupti consequuntur ipsa officiis voluptatibus impedit maxime et qui at suscipit ullam doloribus distinctio autem dolore, neque placeat quasi cum! Aperiam, tempora adipisci! Harum sint enim ex nisi dignissimos?
            Sint quas culpa beatae tenetur repellendus iste dignissimos, corrupti aliquam et placeat magnam! Eaque obcaecati est modi. Culpa velit suscipit earum voluptates vel dolorem, natus quod commodi perferendis explicabo praesentium!
            Modi expedita recusandae, explicabo cupiditate delectus amet? Magni error praesentium aperiam molestias quae similique repellendus minima provident maxime commodi, dolorem voluptatem illo reprehenderit suscipit a vel omnis itaque blanditiis obcaecati.</div>
            <img src={sourceImage} alt="" />
        </div>
    )
}

export default Home;