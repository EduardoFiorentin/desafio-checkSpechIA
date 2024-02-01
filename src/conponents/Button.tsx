export const Button = ({content, href}: {content: string, href: string}) => {
    return (
        <a href={href}>
            <button className="bg-purple text-[2rem] w-[230px] rounded-[10px] block m-auto mt-[50px]" >
                {content}
            </button>
        </a>
    )
}