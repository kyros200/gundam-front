import Card from '../Card'
import TagContainer from '../TagContainer'
import './CardEntry.scss'

const CardEntry = ({date = "YYYY-MM-DD", name="--", tags=[{name: "No tags", color: "red"}], ...rest}) => {
    return (
    <Card {...rest}>
        <div className='card-entry'>
            <div className='date'>
                {date}
            </div>
            <div className='title'>
                {name}
            </div>
        </div>
        <TagContainer tags={tags} />
    </Card>
    )
}

export default CardEntry;