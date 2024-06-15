import { OverView } from "./components/OverView"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Transactions } from "./components/Transactions"
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Header />
          <main className="p-3 sm:p-8 w-full gap-8 flex flex-col bg-[#fafafa]">
            <OverView />
            <Transactions />
            <h5 className="text-center text-gray-500">Made with ❤️ by <a className="underline font-bold" target="_blank" href="https://x.com/1omsharma">Om Sharma</a></h5>
          </main>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App