import './Logo.scss'

import logoGC from '../../../images/logo_GC_w.svg'
import logoN64 from '../../../images/logo_n64_w.svg'
import logoWiiU from '../../../images/logo_wiiu_w.svg'
import logoSwitch from '../../../images/logo_ns_w.svg'
import logoPs4 from '../../../images/logo_ps4_w.svg'
import logoPsv from '../../../images/logo_psv_w.svg'

const logoConsoles = {
    // ds:,
    // "3ds":,
    // psp:,
    psv: logoPsv,

    n64:logoN64,
    gc: logoGC,
    wiiu: logoWiiU,
    switch: logoSwitch,

    // ps3:,
    ps4: logoPs4,
}

const Logo = ({ console, className }) => {
    return (
        <div className={`logoConsole ${className}`}>
            <img src={logoConsoles[console]} alt={`Logo ${console}`}/>
        </div>
    )
}

export default Logo;