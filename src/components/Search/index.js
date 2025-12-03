import Input from '../shared/Input'
import Button from '../shared/Button'
import './Search.scss'

const Search = (props) => {
    return (
        <div className={`search-container`}>
            <div className='search-fields'>
                <Input className='input' label='Card Name' value={props?.searchText} onChange={(e) => props.setSearchText(e.target.value)}/>
                <Button className='button' onClick={() => props.searchFunc()}>Search</Button>
            </div>
            {props.count ?
            <>
                <div className='search-count-result'>
                    <span className='number'>{props.count}</span> cards found
                </div>
            </>
            :
            <>
                <div className='search-count-result'>
                    No Cards Found! Search Again Above.
                </div>
            </>
            }
        </div>
    )
}

export default Search;