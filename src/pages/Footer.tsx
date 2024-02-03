import { Instagram, Twitter, Facebook, Send, Copyright } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-darkgrey font-imprima flex flex-col items-center">
            <ul className="py-[30px]">
                <a href="#header">
                    <li className='pb-[10px]'>Inicio</li>
                </a>
                <a href="#about">
                    <li className='pb-[10px]'>Sobre Nós</li>
                </a>
                <a href="#solutions">
                    <li className='pb-[10px]'>Soluções</li>
                </a>
                <a href="#subscriptions">
                    <li className='pb-[10px]'>Preços</li>
                </a>
                <a href="#contact">
                    <li className='pb-[10px]'>Contato</li>
                </a>
            </ul>

            <div className="">
                <div className="flex w-[300px] justify-evenly">
                    <Instagram size={32}/>
                    <Twitter size={32}/>
                    <Facebook size={32}/>
                    <Send size={32}/>
                </div>
                <p className="flex w-[300px] justify-center mt-4 mb-2"> <Copyright size={22} className="mr-1"/> <a href="https://portifolio-eduardofiorentin.netlify.app/" target="_blank" className="underline">Eduardo Fiorentin</a> - dev front end</p>
            </div>
        </footer>
    )
}