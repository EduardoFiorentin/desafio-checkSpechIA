import { Instagram, Twitter, Facebook, Send, Copyright } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-darkgrey font-imprima flex flex-col items-center">
            <ul className="py-[30px] md:flex md:w-[500px] md:justify-evenly">
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
                    <li className='pb-[10px]'>Planos</li>
                </a>
                <a href="#contact">
                    <li className='pb-[10px]'>Contato</li>
                </a>
            </ul>

            <div className="">
                <div className="flex justify-evenly">
                    <a href="https://www.instagram.com/" target="_blank">
                        <Instagram size={32}/>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <Twitter size={32} href="https://twitter.com/" target="_blank"/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <Facebook size={32}/>
                    </a>
                    <a href="https://web.telegram.org/k/" target="_blank">
                        <Send size={32}/>
                    </a>
                </div>
                <p className="flex w-[300px] justify-center mt-4 mb-2"> <Copyright size={22} className="mr-1"/> <a href="https://portifolio-eduardofiorentin.netlify.app/" target="_blank" className="underline">Eduardo Fiorentin</a> - dev front end</p>
            </div>
        </footer>
    )
}