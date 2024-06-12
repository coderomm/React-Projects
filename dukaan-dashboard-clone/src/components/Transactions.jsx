import { Button } from "./Button"

export const Transactions = () => {
    return <section className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-5">
            <h2 className="font-medium text-xl text-[#1A181E]">Transactions | This Month</h2>
            <div className="flex gap-3">
                <Button title={"Payouts (22)"} primary={true} />
                <Button title={"Refunds (2)"} primary={false} />
            </div>
        </div>
    </section>
}