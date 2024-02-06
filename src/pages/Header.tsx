import Logo from '../assets/icons/Logo.svg'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '../conponents/Button'
import image from '../assets/img/header-img.png'
import { TextSlider } from '../conponents/Slider'

export const Header = () => {
    const [menu, setMenu] = useState(false)

    const handleToggleMenu = () => setMenu(!menu)
    
    return (
        <header className="min-h-screen bg-header bg-cover bg-top bg-center font-imprima pb-[30px]" id='header'>
            <nav className="flex justify-between w-full fixed bg-blue border-b z-10 items-center">
                <a href="https://eduardofiorentin.github.io/desafio-checkspechIA">
                    <div className='flex justify-center items-center'>
                        <img src={Logo} className='w-[55px] h-[55px]'/>
                        <p className=' text-[20px]'>CheckSpeech IA</p>
                    </div>
                </a>

                <Menu size={50} className='mr-[10px] z-10 m-[10px] md:hidden' onClick={handleToggleMenu}/>

                {
                    menu && (
                    <ul className="fixed flex flex-col right-0 top-0 h-screen bg-black pt-[90px] text-2xl w-1/2 items-center">
                        <a href="#about">
                            <li className='mb-[20px]'>Produto</li>
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

                    <ul className="hidden md:flex w-[50%] justify-evenly">
                        <a href="#about">
                            <li className=''>Produto</li>
                        </a>
                        <a href="#solutions">
                            <li className=''>Soluções</li>
                        </a>
                        <a href="#subscriptions">
                            <li className=''>Planos</li>
                        </a>
                        <a href="#contact">
                            <li className=''>Contato</li>
                        </a>
                    </ul>
            </nav>

            <div className='pt-[90px] md:flex justify-center items-center'>
                <TextSlider/>
                {/* <p className='text-[2rem] lg:text-[3rem] text-center mx-[50px] md:w-[50%]'><span className='font-black h-3/4'>Precisão, Sentimento e Confiabilidade</span> em Cada Palavra!</p> */}
                <img src={image} alt="" className='hidden w-[350px] h-[300px] md:flex mr-[30px]'/>
            </div>

            <Button content="Saiba Mais" href="#contact" className='text-bold bg-purple'/>
        </header>
    )
}

// Precisão, Sentimento e Confiabilidade em Cada Palavra!
// Transcrição inteligente para projetos impactantes.
// Simplifique suas transcrições, amplifique seus resultados.