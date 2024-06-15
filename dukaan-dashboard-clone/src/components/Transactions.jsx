import transactions from "../data/ordersData"
import { Button } from "./Button"

export const Transactions = () => {
    return <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
            <h2 className="font-medium text-xl text-[#1A181E]">Transactions | This Month</h2>
            <div className="flex gap-3">
                <Button title={"Payouts (22)"} primary={true} />
                <Button title={"Refunds (2)"} primary={false} />
            </div>
        </div>
        <div className="flex flex-col gap-3 bg-white pt-3 px-3 pb-2 rounded-lg shadow-sm">
            <div className="flex justify-between items-center gap-3">
                <div className="rounded border border-[#D9D9D9] py-[6px] px-4 flex items-center gap-2 text-[#808080] max-w-[248px]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                    </svg>
                    <input className="bg-transparent outline-none w-full" type="text" placeholder="Order ID or transaction ID" />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">Sort
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z" fill="#4D4D4D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z" fill="#4D4D4D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z" fill="#4D4D4D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z" fill="#4D4D4D" />
                        </svg>
                    </button>
                    <button className="p-2 rounded border border-[#D9D9D9] flex items-center text-[#4D4D4D] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 stroke-[#4D4D4D]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="overflow-auto">
                <table className="min-w-full">
                    <colgroup>
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                    </colgroup>
                    <thead className="text-[#4D4D4D] font-medium text-sm">
                        <tr className="bg-[#F2F2F2]">
                            <th className="flex items-center text-[#4D4D4D] gap-1 py-[10px] px-3 text-left tracking-wider rounded-l">Date <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 fill-[#4D4D4D]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg></th>
                            <th className="py-[10px] px-3 text-left tracking-wider">Status</th>
                            <th className="py-[10px] px-3 text-left tracking-wider">Transaction ID</th>
                            <th className="py-[10px] px-3 text-left tracking-wider">Order amount</th>
                            <th className="py-[10px] px-3 text-left tracking-wider">Transaction fees</th>
                            <th className="py-[10px] px-3 text-right tracking-wider rounded-r">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-[#E6E6E6]">
                        {transactions.map((row, index) => {
                            return (
                                <tr className={`${index !== transactions.length - 1 ? 'border-b border-[#E6E6E6]' : ''} text-sm font-normal`} key={index}>
                                    <td className="font-medium px-3 py-[10px] text-[#146EB4] text-left">{row.date}</td>
                                    <td className="flex items-center gap-[6px] px-3 py-[10px] text-[#1A181E] text-left">
                                        <span
                                            className={`${row.status === "Successful"
                                                ? "bg-green-500"
                                                : "bg-[#999999]"
                                                } w-[10px] h-[10px] rounded-full`}
                                        ></span>
                                        {row.status}
                                    </td>
                                    <td className="px-3 py-[10px] text-[#4D4D4D] text-left">
                                        {row.transactionID}
                                    </td>
                                    <td className="px-3 py-[10px] text-[#1A181E] text-left">{row.orderAmount}</td>
                                    <td className="px-3 py-[10px] text-[#1A181E] text-left">{row.transactionFees}</td>
                                    <td className="px-3 py-[10px] text-[#4D4D4D] text-right">{row.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
}