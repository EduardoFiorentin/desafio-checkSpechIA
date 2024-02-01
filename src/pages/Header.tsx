import Logo from '../assets/icons/Logo.svg'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '../conponents/Button'

export const Header = () => {
    const [menu, setMenu] = useState(false)

    const handleToggleMenu = () => setMenu(!menu)

    return (
        <header className="min-h-screen bg-header bg-cover bg-top bg-center font-imprima">
            <nav className="flex justify-between">
                <div className='flex justify-center items-center'>
                    <img src={Logo} className='w-[55px] h-[55px]'/>
                    <p className=' text-[20px]'>CheckSpeech IA</p>
                </div>

                <Menu size={50} className='mr-[10px] z-10 m-[10px]' onClick={handleToggleMenu}/>

                {
                    menu && (
                    <ul className="fixed flex flex-col right-0 top-0 h-screen bg-black pt-[90px] text-2xl w-1/2 items-center">
                        <li className='mb-[20px]'>Soluções</li>
                        <li className='mb-[20px]'>Clientes</li>
                        <li className='mb-[20px]'>Preços</li>
                        <li className='mb-[20px]'>Contato</li>
                    </ul>
                    )
                }
            </nav>

            <div>
                <p className='text-[3rem] text-center'><span className='font-black'>Precisão, Sentimento e Confiabilidade</span> em Cada Palavra!</p>
                <img src="hidden" alt="" />
            </div>

            <Button content="Saiba Mais" href="#"/>
        </header>
    )
}