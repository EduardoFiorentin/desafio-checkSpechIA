import { AudioLines, MessageSquareText, Heart } from "lucide-react"
import { Card } from "../conponents/Card"


export const Solutions = ({lang}: {lang: string}) => {
    return (
        <section className="bg-blue" id="solutions">
            <h2 className="text-center py-[40px] text-[40px] mb-[40px]">Nossas <span className="font-bold">Soluções</span></h2>
            <div className="flex flex-col items-center lg:flex-row justify-center items-center">
                <Card 
                    icon={<AudioLines size={90}/>} 
                    title="Transcrissão de audio" 
                    description="Transcrissão de audio síncrona e assíncrona que tornam seu trabalho muito mais fácil"
                    className="w-2/3 mb-[60px] md:w-[30%] lg:w-[32%]"/>
                    
                <Card 
                    icon={<MessageSquareText size={90}/>} 
                    title="Identificação de idiomas" 
                    description="Nossa API de última geração possui suporte para 52 idiomas, garantindo que seu negócio transcenda fronteiras"
                    className="w-2/3 mb-[60px] md:w-[30%] lg:w-[32%]"/>
                <Card 
                    icon={<Heart size={90}/>} 
                    title="Análise de sentimentos" 
                    description="Encontre momentos importantes em falas, diferencie positivas e negativas e muito mais!"
                    className="w-2/3 mb-[60px] md:w-[30%] lg:w-[32%]"/>
            </div>
        </section>
    )
}