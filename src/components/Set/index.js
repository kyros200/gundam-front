import { useState } from 'react';
import Card from '../Card'
import Button from '../shared/Button'
import './Set.scss'

const Set = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const cardsOwnedThisSet = props?.cards?.reduce((a, v) => {return a + v.have}, 0);
    const cardsTotalThisSet = props.cards.length;
    
    const getSetColor = () => {
        if(cardsOwnedThisSet === cardsTotalThisSet)
            return "completed"
        else if (cardsOwnedThisSet === 0)
            return ""
        else
            return "partial"
    }

    return (
        <div key={props.setId} id={props.setId} className={`set-container`}>
            <div className={`accodion-button ${getSetColor()}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='set-name'>
                    <div className='icon-container'>
                        <img src={props.setIcon} alt={props.setName}/>
                    </div>
                    {props.setName}
                </div>
                <div className='quantity'>
                    {cardsOwnedThisSet} / {cardsTotalThisSet}
                </div>
            </div>
            <div className={`accordion-content ${isOpen ? "" : "hide"}`}>
                {props.isEdit ?
                <div className='buttons-container'>
                    <Button className='button' onClick={() => props.setFlags({data: props.cards.map((card) => card.id), have: 1})}>
                        Own All
                    </Button>
                    <Button className='button red' onClick={() => props.setFlags({data: props.cards.map((card) => card.id), ban: 1})}>
                        Ban All
                    </Button>
                </div>
                :<></>}
                <div className='cards-container'>
                    {props.cards.map((card) => <Card setFlags={props.setFlags} isEdit={props.isEdit} {...card} />)}
                </div>
            </div>
        </div>
    )
}

export default Set;