export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount,
}) => {
    return <div className="bg-white flex-grow min-w-[300px] rounded-lg shadow-sm p-5 flex flex-col gap-4">
        <h5 className="text-[#4d4d4d] flex items-center gap-3">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        </h5>
        <div className="flex justify-between items-center">
            <p className="font-medium text-3xl">
                ₹{amount}
            </p>
            {orderCount ? <p className="text-base font-medium underline text-[#146EB4] flex items-center">
                {orderCount} Orders
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#146EB4] h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </p> : null}
        </div>
    </div>
}