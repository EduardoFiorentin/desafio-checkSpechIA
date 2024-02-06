import { Button } from "../conponents/Button"
import image from '../assets/img/about-img.jpg'

export const About = () => {
    return (
        <section id="about" className="bg-blue text-[40px]">
            <h2 className="text-center py-[40px]">Nosso <span className="font-bold">Produto</span></h2>
            <div className="lg:flex max-w-[1100px] m-auto">
                <div className="px-[30px]  max-w-[900px] m-auto lg:w-[48%] ">
                    <h3 className="text-3xl mb-[10px]">A solução para os seus projetos</h3>
                    <p className="text-xl">CheckSpeech AI é a solução definitiva para projetos de média e grande escala que demandam transcrição precisa e análise de sentimentos em tempo real.
                    <br/>Com nossa IA treinada em mais de 500.000 horas de áudio diversificado, oferecemos a confiabilidade e precisão que seu projeto precisa.</p>
                    <Button content="Saiba Mais" href="#contact" className="bg-purple shadow-none"/>
                </div>
                <div className="py-20 w-full flex justify-center lg:w-[48%]">
                    <div className="relative w-9/12 max-w-[400px] ">
                        <img src={image} alt="" className="w-full"/>
                        <div className="w-[30px] h-[30px] bg-purple rounded-full absolute top-[-15px] left-[-15px] shadow-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}