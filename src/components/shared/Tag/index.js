import './Tag.scss';

const Tag = ({key, backgroundColor, name}) => {
    return (
        <div key={key} className='tagNajjar' style={{backgroundColor}}>
            {name}
        </div>
    )
}

export default Tag;