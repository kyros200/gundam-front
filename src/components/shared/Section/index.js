import Link from '../Link'
import './Section.scss';

const Section = ({ children, headerText, headerLine = false, to, footerText, footerLine = false, backgroundColor = "#eeffee", className}) => {
    return (
        <div className={`section-container ${className}`} style={{backgroundColor}}>
            <div className='content'>
                {headerText || headerLine ?
                <div className='header'>
                    {headerText}
                    {headerLine ?
                    <div className='line' />
                    : <></>
                    }
                </div>
                :<></>}
                {children}
                {to && footerText ? 
                    <div className='footer'>
                        <Link className="bold" to={to}>
                            {footerText}
                        </Link> 
                        {footerLine ?
                        <div className='line' />
                        : <></>
                        }   
                    </div>
                : <></>}
            </div>
        </div>
    )
}

export default Section;