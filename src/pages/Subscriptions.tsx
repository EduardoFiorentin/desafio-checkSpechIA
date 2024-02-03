import { Button } from "../conponents/Button"

export const Subscription = () => {
    return (
        <section id="subscriptions" className="bg-blue min-h-screen">
            <h2 className="text-center py-[40px] text-[40px]">Conheça nossos <span className="font-bold">Planos</span></h2>
            
            <div className="flex flex-col md:items-center max-w-screen lg:flex-row lg:justify-center h-auto lg:items-stretch lg:justify-evenly max-w-[1100px] m-auto">
                <div className="h-auto flex flex-col bg-darkblue pb-[50px] md:w-[60%] lg:w-[30%] px-[20px] ">
                    <h3 className="text-[36px] text-center py-[20px] font-bold">Begginer</h3>
                    <div className="border-t border-b mb-[20px] py-[20px]">
                        <p className=""><span className="text-[30px]">29</span> / por mês</p>
                        <p className="">ou</p>
                        <p className=""><span className="text-[30px]">328</span> / por ano</p>
                    </div>
                    <div>
                        <p className="text-[12px]">Transcrição de Áudio Assíncrono</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/120 minutos (R$0,20 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px]">Transcrição de Áudio em tempo real</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/90 minutos (R$0,40 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px]">Identificação de Idiomas em áudios</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/200 minutos (R$0,05 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px]">Análise de sentimento a partir do áudio (áudio pré-gravado)</p>
                        <p className="text-transparent pl-[10px] text-[10px]"> /120 minutos (R$0,40 / minuto excedente)</p>
                    </div>
                    <Button content="Assinar" href="#contact" className="text-lightpurple shadow-none border-lightpurple"/>
                </div>
                <div className="h-auto flex flex-col bg-lightblue px-[15px] my-[20px] pb-[50px] md:w-[60%] lg:w-[30%] lg:h-full lg:my-[0]">
                    <h3 className="text-[36px] text-center py-[20px] font-bold">Business</h3>
                    <div className="border-t border-b mb-[20px] py-[20px]">
                        <p className=""><span className="text-[30px]">44</span> / por mês</p>
                        <p className="">ou</p>
                        <p className=""><span className="text-[30px]">499</span> / por ano</p>
                    </div>
                    <div>
                        <p className="text-[12px]">Transcrição de Áudio Assíncrono</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/200 minutos (R$0,15 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px]">Transcrição de Áudio em tempo real</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/120 minutos (R$0,40 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px]">Identificação de Idiomas em áudios</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/500 minutos (R$0,03 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px]">Análise de sentimento a partir do áudio (áudio pré-gravado)</p>
                        <p className="text-transparent pl-[10px] text-[10px]">/200 minutos (R$0,35 / minuto excedente)</p>
                    </div>
                
                    <Button content="Assinar" href="#contact" className="text-cian shadow-none border-cian"/>
                </div>
                <div className=" h-auto flex flex-col bg-darkblue p-[15px] pb-[50px] md:w-[60%] lg:w-[30%]  lg:h-[100%]">
                    <h3 className="text-[36px] text-center py-[20px] font-bold">Enterprise</h3>
                    <div className="border-t border-b mb-[20px] py-[20px]">
                        <p className="text-center"><span className="text-[20px] font-bold">Preço sob consulta</span></p>
                    </div>
                    <div>
                        <p className="">Preços especiais para grandes volumes</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Prioridade no suporte técnico.</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Gestor de conta dedicado.</p>
                    </div>
                    <Button content="Contato" href="#contact" className="text-lightpurple shadow-none border-lightpurple"/>
                </div>
            </div>
        </section>
    )
}