export const Button = ({
    title,
    primary
}) => {
    return <button className={`${primary ? "bg-[#146EB4] text-white" : "bg-[#E6E6E6] text-[#808080]"} 
    py-[6px] px-4 rounded-[40px] text-[14px] font-medium`}>
        {title}
    </button>;
}
