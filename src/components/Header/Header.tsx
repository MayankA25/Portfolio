import { ArrowUpRight, Moon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const tabs = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Skills",
      path: "#contact",
    },
  ];
  return (
    <div className="sticky top-0 z-4 bg-black flex items-center justify-between p-8 py-4">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl">Mayank</h1>
      </div>
      {/* <div className="flex items-center gap-10 justify-center bg-linear-150 from-neutral-900 via-neutral-900 to-neutral-800 py-3 rounded-xl shadow-2xl">
            { tabs.map((tab, index)=>{
                return (
                    <Link key={index} href={tab.path}>
                        <h1 className='font-bold text-lg'>{tab.name}</h1>
                    </Link>
                )
            }) }
        </div> */}
      <div></div>
      <div className="flex items-center gap-8">
        <button>
          <Moon className="hover:fill-white fill-black cursor-pointer transition-all duration-200" />
        </button>
        <button className="flex items-center gap-2 border rounded-full p-3 justify-center px-6 hover:bg-neutral-200 hover:text-neutral-900 font-bold cursor-pointer transition-all duration-200">
          <h1>Contact</h1>
          <i>
            <ArrowUpRight />
          </i>
        </button>
      </div>
    </div>
  );
}
