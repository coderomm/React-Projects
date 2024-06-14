import speaker from '../../public/speaker.png';
export const Topbar = () => {
    return <header className=" flex justify-between items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF]">
        <div className="flex items-center gap-2 sm:gap-4 sm:flex-grow">
            <button className="block lg:hidden">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
            </button>
            <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>
            <div className="flex items-center gap-[6px] text-[#4D4D4D]">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                </svg>
                <p className="hidden sm:block text-xs font-normal">How it works</p>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-[#F2F2F2] text-[#808080] rounded px-4 py-1.5 sm:py-[9px] w-[140px] sm:flex-grow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input className="bg-transparent outline-none w-full" type="text" placeholder="Search features, tutorials, etc." />
        </div>
        <div className="flex gap-2 justify-end sm:flex-grow">
            <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center">
                <img alt="speaker logo" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={speaker} />
            </button>
            <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z">
                    </path>
                </svg>
            </button>
        </div>
    </header>
}