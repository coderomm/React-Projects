import { OverView } from "./components/OverView"
import { Transactions } from "./components/Transactions"

function App() {
  return (
    <main className="p-3 sm:p-8 w-full gap-8 flex flex-col">
      <OverView />
      <Transactions/>
    </main>
  )
}

export default App