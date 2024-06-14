import { OverView } from "./components/OverView"
import { Sidebar } from "./components/Sidebar"
import { Topbar } from "./components/Topbar"
import { Transactions } from "./components/Transactions"
import { RecoilRoot } from "recoil";
import React, { useEffect, useState } from "react";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <RecoilRoot>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <main className="p-3 sm:p-8 w-full gap-8 flex flex-col bg-[#fafafa]">
            <OverView />
            <Transactions />
          </main>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App