import './Footer.scss';

const Footer = () => {
    return (
        <div className={`footer`}>
            <div className='text'>
                <span className="hatch"><a href="https://hatch.najjar.dev" target="_blank" rel="noreferrer" className="link">Hatch.</a></span> know who I am.
            </div>
            <div className='text'>
                {new Date().getFullYear()} Made by Rafael Najjar
            </div>
        </div>
    )
}

export default Footer;