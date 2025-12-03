import {useNavigate} from 'react-router-dom'
import './Card.scss'

const Card = ({children, className="", to, ...rest}) => {
    const navigate = useNavigate()
    return (
    <div className={`cardNajjar ${className}`} onClick={() => to && navigate(to)} {...rest}>
        {children}
    </div>
    )
}

export default Card;