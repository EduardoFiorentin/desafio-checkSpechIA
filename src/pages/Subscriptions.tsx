import { Button } from "../conponents/Button"

export const Subscription = () => {
    return (
        <section id="subscriptions" className="bg-blue min-h-screen">
            <h2 className="text-center py-[40px] text-[40px]">Conheça nossos <span className="font-bold">Planos</span></h2>
            
            <div className="flex flex-col">
                <div className="w-screen h-auto flex flex-col bg-darkblue p-[15px] pb-[50px]">
                    <h3 className="text-[36px] text-center py-[20px] font-bold">Begginer</h3>
                    <div className="border-t border-b mb-[20px] py-[20px]">
                        <p className=""><span className="text-[40px]">29</span> / por mês</p>
                        <p className="">ou</p>
                        <p className=""><span className="text-[40px]">328</span> / por ano</p>
                    </div>
                    <div>
                        <p className="">Transcrição de Áudio Assíncrono</p>
                        <p className="text-transparent pl-[10px]">/120 minutos (R$0,20 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Transcrição de Áudio em tempo real</p>
                        <p className="text-transparent pl-[10px]">/90 minutos (R$0,40 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Identificação de Idiomas em áudios</p>
                        <p className="text-transparent pl-[10px]">/200 minutos (R$0,05 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Análise de sentimento a partir do áudio (áudio pré-gravado)</p>
                        <p className="text-transparent pl-[10px]"> /120 minutos (R$0,40 / minuto excedente)</p>
                    </div>
                    <Button content="Assinar" href="#" className="text-lightpurple shadow-none"/>
                </div>
                <div className="w-screen h-auto flex flex-col bg-lightblue p-[15px] my-[20px] pb-[50px]">
                    <h3 className="text-[36px] text-center py-[20px] font-bold">Business</h3>
                    <div className="border-t border-b mb-[20px] py-[20px]">
                        <p className=""><span className="text-[40px]">44</span> / por mês</p>
                        <p className="">ou</p>
                        <p className=""><span className="text-[40px]">499</span> / por ano</p>
                    </div>
                    <div>
                        <p className="">Transcrição de Áudio Assíncrono</p>
                        <p className="text-transparent pl-[10px]">/200 minutos (R$0,15 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Transcrição de Áudio em tempo real</p>
                        <p className="text-transparent pl-[10px]">/120 minutos (R$0,40 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Identificação de Idiomas em áudios</p>
                        <p className="text-transparent pl-[10px]">/500 minutos (R$0,03 / minuto excedente)</p>
                    </div>
                    <div className="mt-[20px]">
                        <p className="">Análise de sentimento a partir do áudio (áudio pré-gravado)</p>
                        <p className="text-transparent pl-[10px]">/200 minutos (R$0,35 / minuto excedente)</p>
                    </div>
                
                    <Button content="Assinar" href="#" className="text-cian shadow-none border-cian"/>
                </div>
                <div className="w-screen h-auto flex flex-col bg-darkblue p-[15px] pb-[50px]">
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
                    <Button content="Contato" href="#" className="text-lightpurple shadow-none"/>
                </div>
            </div>
        </section>
    )
}