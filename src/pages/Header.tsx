import Logo from '../assets/icons/Logo.svg'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '../conponents/Button'

export const Header = () => {
    const [menu, setMenu] = useState(false)

    const handleToggleMenu = () => setMenu(!menu)

    return (
        <header className="min-h-screen bg-header bg-cover bg-top bg-center font-imprima" id='header'>
            <nav className="flex justify-between w-full fixed bg-blue border-b z-10">
                <div className='flex justify-center items-center'>
                    <img src={Logo} className='w-[55px] h-[55px]'/>
                    <p className=' text-[20px]'>CheckSpeech IA</p>
                </div>

                <Menu size={50} className='mr-[10px] z-10 m-[10px]' onClick={handleToggleMenu}/>

                {
                    menu && (
                    <ul className="fixed flex flex-col right-0 top-0 h-screen bg-black pt-[90px] text-2xl w-1/2 items-center">
                        <a href="#about">
                            <li className='mb-[20px]'>Sobre</li>
                        </a>
                        <a href="#solutions">
                            <li className='mb-[20px]'>Soluções</li>
                        </a>
                        <a href="#subscriptions">
                            <li className='mb-[20px]'>Planos</li>
                        </a>
                        <a href="#contact">
                            <li className='mb-[20px]'>Contato</li>
                        </a>
                    </ul>
                    )
                }
            </nav>

            <div className='pt-[90px]'>
                <p className='text-[2.7rem] h-[370px] text-center'><span className='font-black h-3/4'>Precisão, Sentimento e Confiabilidade</span> em Cada Palavra!</p>
                <img src="hidden" alt="" />
            </div>

            <Button content="Saiba Mais" href="#" className='text-bold bg-purple'/>
        </header>
    )
}

// Precisão, Sentimento e Confiabilidade em Cada Palavra!
// Transcrição inteligente para projetos impactantes.
// Simplifique suas transcrições, amplifique seus resultados.