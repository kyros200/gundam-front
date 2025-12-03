import './Hatch.scss';

const Hatch = ({ text = "Hatch.", className }) => {
    return (
        <span className={`hatch ${className}`}>{text}</span>
    )
}

export default Hatch;