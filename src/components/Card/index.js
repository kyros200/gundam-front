import './Card.scss'
import cardBack from '../../images/card_back.jpg'

const Card = (props) => {
    return (
        <div key={props.id} className={`card-container`}>
            <div className='name'>
                ({props.id}): {props.name}
            </div>
            <div className='image'>
                <img src={props.imageUrl || cardBack} alt={props.name} loading="lazy"/>
            </div>
        </div>
    )
}

export default Card;