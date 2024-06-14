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
            <div className="flex flex-wrap justify-between items-center">
                <div className="rounded border border-[#D9D9D9] py-[10px] px-4 flex items-center gap-2 min-w-[248px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input className="placeholder:text-[#999999] placeholder:font-normal placeholder:text-base"
                        type="text" placeholder="Order ID or transaction ID" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded border border-[#D9D9D9] flex items-center gap-[6px]">
                        <p className="flex py-[10px] px-4 items-center font-normal text-[14px] text-[#4D4D4D]">Sort <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 stroke-[#4D4D4D]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                        </p>
                    </div>
                    <div className="py-[10px] px-4 rounded border border-[#D9D9D9] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 stroke-[#4D4D4D]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </div>
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