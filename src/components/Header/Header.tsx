'use client';
import { ArrowUpRight, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky top-0 z-4 flex items-center justify-between bg-neutral-50 dark:bg-black p-8 py-5 dark:text-neutral-400 w-full text-neutral-800">
      <Link href={"/"} className="flex items-center">
        <h1 className="text-2xl font-bold hover:text-neutral-950 dark:hover:text-white transition-all duration-200">Mayank</h1>
      </Link>
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
      <div className="flex items-center  gap-4 md:gap-8 ">
        <button onClick={()=>{
          setTheme(theme == "dark" ? "light" : "dark");
        }}>
          <Moon className="cursor-pointer transition-colors duration-200 fill:white  hover:fill-black dark:fill-black dark:hover:fill-white " />
        </button>
        <div onClick={()=>{document.getElementById("contact")?.scrollIntoView()}} className="hidden lg:flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black dark:border-white md:p-3 md:px-6 p-1.5 px-3 font-extrabold transition-all duration-200 hover:bg-neutral-900 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-900">
          <h1>Contact</h1>
          <i>
            <ArrowUpRight className="size-5 md:size-6" />
          </i>
        </div>
      </div>
    </div>
  );
}
