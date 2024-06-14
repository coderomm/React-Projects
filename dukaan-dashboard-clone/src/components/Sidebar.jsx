import logoImage from '../../public/logo.png'
import { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { SideBarOpen } from "../atoms/sidebarAtom";
import { OpenIcon, CloseIcon ,Analytics, Appearance, Audience, Delivery, Discount, Home, Marketing, Orders, Payout, Plugin, Products } from '../data/SVGs';


export const Sidebar = () => {

    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useRecoilState(SideBarOpen);

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return <aside className="fixed lg:sticky top-0 left-0 z-50 h-[100dvh] lg:max-w-[224px] bg-[#1E2640] px-3.5 py-4 flex flex-col gap-4 transition-all duration-300 pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto">
        <div className="flex flex-col gap-6 ">
            <div className="flex items-center gap-3 justify-between px-1">
                <div className='bg-white w-[39px] h-[39px] m-[0.5] rounded flex items-center justify-between'>
                    <img className='object-cover object-center' src={logoImage} alt={logoImage} />
                </div>
                <div className="flex flex-col gap-1 w-[108px] justify-center">
                    <h3 className="font-medium text-[15px] text-white">Nishyan</h3>
                    <a href='' className="underline text-[13px] opacity-80 text-white">Visit store</a>
                </div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-[20px] h-[20px] stroke-white text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
            </div>
            <div className="w-full flex flex-col">
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Home}
                    <p className="text-[14px] font-medium">Home</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Orders}
                    <p className="text-[14px] font-medium">Orders</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Products}
                    <p className="text-[14px] font-medium">Products</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Delivery}
                    <p className="text-[14px] font-medium">Delivery</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Marketing}
                    <p className="text-[14px] font-medium">Marketing</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Analytics}
                    <p className="text-[14px] font-medium">Analytics</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#ffffff] bg-[#FFFFFF1A]/10 items-center rounded hover:bg-[#FFFFFF]/10">
                    {Payout}
                    <p className="text-[14px] font-medium">Payouts</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Discount}
                    <p className="text-[14px] font-medium">Discounts</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Audience}
                    <p className="text-[14px] font-medium">Audience</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Appearance}
                    <p className="text-[14px] font-medium">Appearance</p>
                </a>
                <a href="#" className="px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded hover:bg-[#FFFFFF]/10">
                    {Plugin}
                    <p className="text-[14px] font-medium">Plugins</p>
                </a>

            </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-1.5 bg-[#353C53] rounded">
            <div className="rounded p-1.5 bg-white/10">

            </div>
            <div className="flex flex-col gap-0.5">
                <p className="text[13px] text-white/80">Available credits</p>
                <p className="font-medium text-[16px] text-white">222.10</p>
            </div>
        </div>
    </aside>
}