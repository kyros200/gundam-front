import InputMask from 'react-input-mask';
import './Input.scss'

const Input = ({id, label = "Label", onChange = ()=>{}, type = "free", ...rest }) => {

    const handleOnChange = (e) => {
        if(type === "text") {
            e.target.value = e.target.value.replace(/\d/g, "")
        } else if (type === "number") {
            e.target.value = e.target.value.replace(/\D/g, "")
        }

        onChange(e)
    }

    const renderInput = (e) => {
        switch(type) {
            case "text": 
            case "number": 
                return <InputMask id={id} onChange={handleOnChange} {...rest}/>
            case "date": 
                return <InputMask id={id} onChange={handleOnChange} formatChars={{"1": "[0-1]","2": "[1-2]","3": "[0-3]", "X": "[0-9]"}} mask="2XXX-1X-3X" maskChar=" " alwaysShowMask={false}  {...rest}/>
            default:
                return <InputMask id={id} onChange={handleOnChange} {...rest}/>
        }
    }

    return (
        <div className='inputNajjar'>
            {label ? <label htmlFor={id}>{label}</label> : <></>}
            {renderInput()}
        </div>
    )
}

export default Input;