import { ReactNode } from "react"

interface Card {
    icon: ReactNode,
    title: string,
    description: string,
    className?: string
}

export const Card = ({icon, title, description, className}: Card) => {
    return (
        <div className={className + " flex flex-col items-center justify-center text-center"}>
            <div className="bg-purple w-[130px] h-[130px] rounded-full flex items-center justify-center mb-[20px]">{icon}</div>
            <h3 className="text-[30px] font-bold text-center pb-[20px]">{title}</h3>
            <p className="">{description}</p>
        </div>
    )
}