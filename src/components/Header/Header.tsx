import { ArrowUpRight, Moon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-4 flex items-center justify-between bg-black p-8 py-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Mayank</h1>
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
          <Moon className="cursor-pointer fill-black transition-all duration-200 hover:fill-white" />
        </button>
        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border p-3 px-6 font-bold transition-all duration-200 hover:bg-neutral-200 hover:text-neutral-900">
          <h1>Contact</h1>
          <i>
            <ArrowUpRight />
          </i>
        </button>
      </div>
    </div>
  );
}
