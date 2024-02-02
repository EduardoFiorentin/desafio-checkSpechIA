type Button = {
    content: string, 
    href?: string,
    className: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({content, href, className, onClick}: Button) => {
    return (
        <a href={href}>
            <button className={`text-[2rem] w-[230px] rounded-[10px] block m-auto mt-[50px] py-[10px] border border-lightpurple box shadow-button ${className}`} onClick={onClick}>
                {content}
            </button>
        </a>
    )
}