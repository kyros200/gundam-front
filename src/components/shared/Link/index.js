import {Link as L} from 'react-router-dom'
import './Link.scss';

const Link = ({ children, className, to, ...rest}) => {
    return (
        <L className={`linkNajjar ${className}`} to={to} {...rest}>
            {children}
        </L>
    )
}

export default Link;