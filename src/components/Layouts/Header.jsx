import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import style from './Header.module.css';
export default function Header() {
  const headerItems = [
    'Главная',
    'Статьи',
    'Обо мне',
    'Реклама',
  ]
  const [nav, setNav] = useState(false);
  const [ btnState, setState ] = useState(false)
  // console.log(btnState);
  const popOver = e => {
    setState(!btnState)
    btnState ? e.target.classList.add('bg-main-blue') : e.target.classList.remove('bg-main-blue')
    console.log(btnState);
  }
  return (
    window.screen.width >= 768 ?
      <header className="w-full bg-header-black flex justify-between items-center text-white">
        <div className="flex items-center">
          {headerItems.map( item => item === 'Статьи' ? 
          <div className="px-4 py-4 uppercase relative duration-200 hover:bg-main-blue" onMouseEnter={ e => popOver(e) } onMouseLeave={ e => popOver(e) }>
            {item}
            { btnState ? <div id='headerBtn' className="absolute w-48 left-0 bottom-0 z-10 translate-y-[100%] bg-main-blue px-3 py-3 normal-case rounded-b-md">
              <div className="pb-1 border-b border-transparent duration-150 hover:border-white">Создание сайтов</div>
              <div className="pb-1 border-b border-transparent my-3 duration-150 hover:border-white">Интернет-маркетинг</div>
              <div className="pb-1 border-b border-transparent duration-150 hover:border-white">Продвижение видео</div>
            </div> : null }
          </div> :
          <div className="px-4 py-4 uppercase duration-200 hover:bg-main-blue" >{item}</div>
          )}
        </div>
        <div className="flex">
          <div className="py-3 px-4 uppercase">Профиль</div>
          <input type="text" placeholder="Поиск по блогу" className="w-52 px-3 py-4 bg-coal
          md:w-64"/>
        </div>
      </header> 
      :
      <header className="w-full bg-header-black pl-4 flex justify-between items-center text-white">
        <div className='flex h-20 justify-between'>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='##' className='text-black'>Product</a>
            </li>
            <li>
              <a href='##'>About Us</a>
            </li>
            <li>
              <a href='##'>Customers</a>
            </li>
            <li>
              <a href='##'>Price</a>
            </li>
            <li>
              <a href='##'>Contacts</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        {/* <div className="flex">
          <div className="py-3 px-4">Профиль</div>
        </div> */}
        <input type="text" placeholder="Поиск по блогу" className="w-52 px-3 py-4 bg-coal
          md:w-64"/>
      </header> 
  )
}


const NAvbar = () => {
  return (
    <header className={style.header}>
      <div className='container'>
        
      </div>
    </header>
  );
};

