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
  const [ navState, setNavState ] = useState(false)
  const [ btnState, setState ] = useState(false)
  const popOver = e => {
    setState(!btnState)
    btnState ? e.target.classList.add('bg-main-blue') : e.target.classList.remove('bg-main-blue')
    console.log(btnState);
  }
  let listStyle = 'flex flex-col justify-center items-center gap-4 fixed top-0 w-full h-full z-10 duration-1000 bg-header-black '
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
        <div className="flex justify-between">
          <ul className={ navState ? listStyle + 'left-0' : listStyle + 'left-[-100%]'}>
              {headerItems.map( item => <li className='py-3 px-4 text-2xl duration-200 hover:bg-main-blue'><a href='###' >{item}</a></li>)}
          </ul>
          <div className='
          block absolute left-3 top-5 cursor-pointer z-10' 
          onClick={ () => setNavState(!navState) }>
            {navState ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
          </div>
        </div>
        <input type="text" placeholder="Поиск по блогу" className="w-52 px-3 py-4 bg-coal
          md:w-64"/>
        {/* <div className='flex h-20 justify-between'>
        
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div> */}
 

      </header> 
  )
}


