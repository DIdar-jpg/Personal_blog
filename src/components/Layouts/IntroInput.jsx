import React from 'react'
import { AiFillCamera } from "react-icons/ai";
import { BiSolidSend } from "react-icons/bi";

export default function IntroInput() {
  return (
    <div className="hidden w-full rounded-xl bg-[#121212] p-7 my-8 md:flex">
        <input className="w-full border-none bg-transparent text-grey-1 text-xl outline-none focus:outline-none " type="search" name="search" placeHolder="Напишите что-нибудь" />
        <button type="submit" className="p-3 rounded-full bg-[#EBEBEB] mr-4">
            <AiFillCamera size={25} color='#989898'/>
        </button>
        <button type="submit" className="p-3 rounded-full bg-main-blue">
            <BiSolidSend size={25} color='#FFFF'/>
        </button>
    </div>
  )
}
