import { useState } from 'react';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import Modal from '../Modal';
import Search from '../Search'
import Card from '../Card'
import './MainPage.scss';

const BACK_URL = "http://localhost:80"
// const BACK_URL = "https://gundam-back.onrender.com"

const MainPage = ({ isEdit }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [searchText, setSearchText] = useState("")

    const load = (showInfo = true) => {
        setIsLoading(true)
        fetch(`${BACK_URL}/search?search=${searchText}`)
        .then((res) => {
            if(res.status !== 200) {
                throw(new Error("Something went wrong!"))
            }
            return res.json()
        })
        .then((res) => {
            setData(res.data);
            setCount(res.count);
            if(showInfo)
                toast.success(`${res.count} cards found!`)
        })
        .catch((e) => {
            toast.error(e)
            console.log(`error = ${e}`)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const renderSets = () => {
        // return Object.keys(data).map((set) => <Set key={set.setId} setFlags={setFlags} isEdit={isEdit} {...data[set]}/>)
        return data.map((c) => <Card {...c}/>)
    }

    return (
        <div className={`main-container`}>
            <Modal open={isLoading}>
                <ReactLoading type={"spin"} color="#2B912D" />
            </Modal>
            <Search 
                data={data}
                count={count} 
                setSearchText={setSearchText}
                searchFunc={load}
            />
            <div className={`result-container`}>
                {renderSets()}
            </div>
        </div>
    )
}

export default MainPage;