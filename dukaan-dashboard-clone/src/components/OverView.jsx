import { NextPayoutCard } from "./NextPayoutCard"
import { RevenueCard } from "./RevenueCard"

export const OverView = () => {
    return <section className="flex flex-col gap-6">
        <div className="flex justify-between">
            <h2 className="text-[#1A181E] font-medium text-xl">Overview</h2>
            <div className="bg-white flex border border-[#D9D9D9] rounded-[4px] p-4 py-2">
                <span className="font-normal text-base text-[#4D4D4D]">This Month</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#4D4D4D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </div>
        </div>
        <div className="flex flex-wrap gap-5">
            <NextPayoutCard title={"Next Payout"} amount={"2,312.23"} orderCount={13} nextPaymentDate={"Today, 4:00PM"} />
            <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
            <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>
    </section>
}