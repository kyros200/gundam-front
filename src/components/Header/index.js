import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './Header.scss';
import Button from '../shared/Button'
import Modal from '../shared/Modal'
import Input from '../shared/Input'
import BACK_URL from '../../conts';
import ReactLoading from 'react-loading';

const Header = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [loggedUser, setLoggedUser] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isCreatingAcc, setIsCreatingAcc] = useState(false)
    const [inputUser, setInputUser] = useState('')
    const [inputPass, setInputPass] = useState('')
    const [inputTel, setInputTel] = useState('')

    const tryLogin = () => {
        setIsLoading(true)
        fetch(`${BACK_URL}/login/try`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({user: inputUser, pass: inputPass})
        })
        .then((res) => {
            if(res.status !== 200) {
                throw(new Error("Something went wrong!"))
            }
            return res.json()
        })
        .then((res) => {
            localStorage.setItem('gundam-najjar-login', JSON.stringify({
                user: inputUser,
                pass: inputPass,
                tel: res.user.tel
            }))
            setLoggedUser({
                user: inputUser,
                pass: inputPass,
                tel: res.user.tel
            })
            clearStates()
            toast.success('Successful Login!')
        })
        .catch((e) => {
            toast.error('Failed Login!')
            console.log(`error = ${e}`)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const createAcc = () => {
        setIsLoading(true)
        fetch(`${BACK_URL}/login/create`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({user: inputUser, pass: inputPass, tel: inputTel})
        })
        .then((res) => {
            if(res.status !== 200) {
                toast.error('user already exists (or server error lol)')
                throw(new Error("Something went wrong!"))
            }
            return res.json()
        })
        .then((res) => {
            localStorage.setItem('gundam-najjar-login', JSON.stringify({
                user: inputUser,
                pass: inputPass,
                tel: inputTel
            }))
            setLoggedUser({
                user: inputUser,
                pass: inputPass,
                tel: inputTel
            })
            clearStates()
            toast.success('Account created!')
        })
        .catch((e) => {
            toast.error(e)
            console.log(`error = ${e}`)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const clearStates = () => {
        setIsModalOpen(false)
        setIsCreatingAcc(false)
        setInputUser('')
        setInputPass('')
        setInputTel('')
    }

    const logoff = () => {
        setLoggedUser()
        localStorage.removeItem('gundam-najjar-login');
    }

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem('gundam-najjar-login')))
    }, [loggedUser])

    return (
        <>
            <div className={`header-container`}>
                <div className={`header-content`}>
                    <span>NajjarGundam.</span>
                    {loggedUser?.user ?
                    <div className='header-login'>
                        <h6>Oi {loggedUser?.user}</h6>
                        <Button onClick={() => logoff()}>Logoff</Button>
                    </div>
                    :
                    <Button onClick={() => setIsModalOpen(true)}>Login</Button>
                    }
                </div>
            </div>
            <Modal open={isModalOpen}>
                <div className='modal-header'>
                    {isCreatingAcc ? 'Sign Up' : 'Sign In'}
                    <Button onClick={() => {setIsModalOpen(false); setIsCreatingAcc(false)}}>X</Button>
                </div>
                <div className='modal-content'>
                    <Input className='input' label='User' value={inputUser} onChange={(e) => setInputUser(e.target.value)}/>
                    <Input className='input' label='Password' value={inputPass} onChange={(e) => setInputPass(e.target.value)}/>
                    {isCreatingAcc ? <Input className='input' label='Telephone' value={inputTel} onChange={(e) => setInputTel(e.target.value)}/> : <></>}
                    {isCreatingAcc ? 'Criar uma conta vai inserir seu usuário num banco de dados não seguro. Só por favor não insira nada sensível!' : ''}
                </div>
                <div className='modal-footer'>
                    {isLoading ? <ReactLoading type={"spin"} color="#2B912D" /> : <></>}
                    <Button onClick={() => setIsCreatingAcc(!isCreatingAcc)}>{isCreatingAcc ? 'Return to Login' : 'Create Account'}</Button>
                    {isCreatingAcc ? 
                    <Button disabled={isLoading} isLoading={isLoading} onClick={() => createAcc()}>Create Account!</Button>
                    :
                    <Button disabled={isLoading} isLoading={isLoading} onClick={() => tryLogin()}>Login</Button>
                    }
                </div>
            </Modal>
        </>
    )
}

export default Header;