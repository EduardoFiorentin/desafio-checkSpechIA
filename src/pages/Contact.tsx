
import { PhoneInput } from 'react-international-phone';
import InputWithIcon from '../conponents/InputWithIcon';
import { useState } from 'react';

import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from '../conponents/Button';


export const Contacts = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

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
                    />
                    <PhoneInput
                        defaultCountry="br"
                        value={''}
                        onChange={() => {}}
                        className='mb-[15px]'
                    />
                </div>

                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Email'
                    className='w-full p-[10px] h-[36px] rounded-3xl focus:outline-0 bg-inputblue border border-black text-white mb-[15px]'
                />

                <textarea 
                    name="" 
                    id="" 
                    className='w-full h-[150px] focus:outline-0 text-white bg-inputblue rounded-3xl border border-black p-[10px]'
                    placeholder='Mensagem'
                    cols={30} 
                    rows={10}
                    maxLength={180}
                />

                <div className="flex items-center w-full">
                    <input type="checkbox" name="" id="" className='w-[20px] h-[20px] rounded' />
                    <p className='text-[.8rem] ml-[10px] text-white'>Eu concordo com a Política de Privacidade.</p>
                </div>

                <Button className='text-lightpurple font-black shadow-none' content='Enviar' href='#' onClick={() => console.log("Hello, world")}/>
            </div>
        </section>
    )
}




{/* <InputWithIcon className='' value='' label='Nome' onChange={() => {}}>
    <CircleUserRound color='white'/>
</InputWithIcon> */}