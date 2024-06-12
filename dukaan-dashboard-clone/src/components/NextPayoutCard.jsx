export const NextPayoutCard = ({
    title,
    orderCount,
    amount,
    nextPaymentDate
}) => {
    return <div className="bg-[#146EB4] hover:bg-[#0E4F82] rounded-[8px] flex-grow min-w-[300px]">
        <div className="p-5 flex flex-col gap-4">
            <h5 className="text-white flex items-center gap-3">{title}
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </h5>
            <div className="flex justify-between items-center">
                <p className="text-white font-medium text-3xl">
                    ₹{amount}
                </p>
                {orderCount ? <p className="text-base font-medium underline text-white flex items-center">
                    {orderCount} Orders
                    <svg className="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </p> : null}
            </div>
        </div>
        <div className="flex justify-between items-center bg-[#0E4F82] rounded-[8px] px-5 py-2">
            <p className="text-[#F2F2F2] font-normal text-sm">Next payout date:</p>
            <p className="text-[#F2F2F2] font-medium text-sm">{nextPaymentDate}</p>
        </div>
    </div>
}