
import { PhoneInput } from 'react-international-phone';
import { useState } from 'react';
import { Button } from '../conponents/Button';

import { emailValidate, messageValidate, nameValidate } from '../utils/validations';


export const Contacts = () => {

    const [name, setName] = useState('')
    const [errorName, setErrorName] = useState<string | null>(null)
    const [phone, setPhone] = useState('')
    // const [errorPhone, setErrorPhone] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState<string | null>(null)
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [checked, setChecked] = useState(false)
    const [errorChecked, setErrorChecked] = useState<string | null>(null)


    const handleSubmit = () => {
        if (!nameValidate(name)) {
            console.log("nome não passa")
            setErrorName("Nome não é válido!")
        }
        if (!emailValidate(email)) {
            console.log("email não passa")
            setErrorEmail("Email não é válido!")
        }
        if (!messageValidate(message)) {
            console.log("message não passa")
            setErrorMessage("Mensagem não é válida!")
        }
        if (!checked) {
            setErrorChecked("Aceite os termos")
        }

        if (!errorName && !errorEmail && !errorMessage && checked) {
            console.log("Passado")
            window.alert("Mensagem enviada")
        }
    }

    return (
        <section className="bg-blue min-h-screen font-imprima">
            <h2 className="text-center py-[40px] text-[40px]">Entre em <span className="font-bold">Contato</span></h2>
            <div className='w-[300px] mx-auto'>

                <div className="">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder='Nome'
                        className='w-full p-[10px] h-[36px] rounded-3xl focus:outline-0 bg-inputblue border text-white border-black mb-[15px]'
                        value={name}
                        onFocus={() => setErrorName(null)}
                        onChange={event => setName(event.target.value)}
                    />
                    <PhoneInput
                        defaultCountry="br"
                        className='mb-[15px]'
                        value={phone}
                        onChange={phone => setPhone(phone)}
                    />
                </div>

                <input 
                    type="email" 
                    name="" 
                    id="" 
                    placeholder='Email'
                    className='w-full p-[10px] h-[36px] rounded-3xl focus:outline-0 bg-inputblue border border-black text-white mb-[15px]'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    onFocus={() => setErrorEmail(null)}
                />

                <textarea 
                    name="" 
                    id="" 
                    className='w-full h-[150px] focus:outline-0 text-white bg-inputblue rounded-3xl border border-black p-[10px]'
                    placeholder='Mensagem'
                    cols={30} 
                    rows={10}
                    maxLength={180}
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    onFocus={() => setErrorMessage(null)}
                />

                <div className="flex items-center w-full">
                    <input type="checkbox" name="" id="" className='w-[20px] h-[20px] rounded' checked={checked} onChange={() => {setChecked(!checked)}} onFocus={() => setErrorChecked(null)}/>
                    <p className='text-[.8rem] ml-[10px] text-white'>Eu concordo com a Política de Privacidade.</p>
                </div>

                {errorName && (
                    <p className='text-center'>Nome não é válido</p>
                )}
                {errorEmail && (
                    <p className='text-center'>Email não é válido</p>
                )}
                {errorMessage && (
                    <p className='text-center'>Mensagem não é válida</p>
                )}
                {errorChecked && (
                    <p className='text-center'>Aceite os termos</p>
                )}

                <Button className='text-lightpurple font-black shadow-none' content='Enviar' onClick={handleSubmit}/>
            </div>
        </section>
    )
}




{/* <InputWithIcon className='' value='' label='Nome' onChange={() => {}}>
    <CircleUserRound color='white'/>
</InputWithIcon> */}
