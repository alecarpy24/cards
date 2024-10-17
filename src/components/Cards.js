
import { Card } from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
const cards = [
    {
        id: 1,
        title: 'Fazt web',
        image: image1,
        url:'https://blog.faztweb.com/'
    }, {
        id: 2,
        title: 'Fazt Blog',
        image: image2,
        url:'https://www.faztweb.com/'
    },
    {
        id: 3,
        title: 'Fazt Youtube',
        image: image3,
        url:'https://www.youtube.com/@FaztCode'
    }
]

function Cards() {
    return (
        <div className='container d-flex justify-content-center h-100 align-items-center'>
            <div className='row'>
                {cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url}/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export { Cards }
