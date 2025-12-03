import {Outlet} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './PageLayout.scss'

const PageLayout = () => {
    return (
        <div className='whole-container'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

}

export default PageLayout;