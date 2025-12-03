import Card from '../Card'
import Logo from '../Logo'
import './CardGame.scss'

const CardGame = ({name, console, image, className, ...rest}) => {
    return (
    <Card {...rest} className={`card-game ${className}`}>
        <div className='image'>
            <img src={image} alt={name}/>
        </div>
        {console ? 
            <Logo className="logo" console={console} />
        : <></>}
        <div className='text'>
            {name}
        </div>
    </Card>
    )
}

export default CardGame;