import React from 'react'
import { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default function MainSlider() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const settings = {
    arrows: false,
    dots: false,
    // Наличие точек
    infinite: true,
    // Бесконечный слайдер
    speed: 500,
    // Скорость прокрутки
    slidesToShow: screenWidth >= 768 ? 4 : 2,
    // Количество видимых слайдов
    slidesToScroll: 2,
    // Количество которые скролятся за один свайп
  };
  useEffect(() => {window.addEventListener('resize', () => setScreenWidth(window.innerWidth))}, [])
  const sliderInfo = [
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJvtnVQEm7UzPFGCSSLxKpMw7vbK0DeLCLlrx-xUTDA&s",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "https://yt3.googleusercontent.com/jiFkF9Z-nH9PfWZMFDIAkiSZgT-W_znbBpVmnGkgx5x4TEM89zgFTHNKI7Xz2hUCHa89h5y9jw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "https://img07.rl0.ru/afisha/e1200x1200i/daily.afisha.ru/uploads/images/e/e6/ee61603b83298547cb43d2c70c8af339.jpg",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "https://www.interfax.ru/ftproot/photos/photostory/2024/01/07/wk/week315.jpg",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: 'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg',
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: 'https://www.tutu.ru/file/4/b024c1aad77e42d424c96720b4d60712/',
    },
  ]
  return (
    <div className="mt-4">
      <Slider {...settings}>
        {sliderInfo.map( item => {
          return(
            <div className='p-4'>
              <div style={{backgroundImage: `url(${item.photo})`}} className={"w-full h-48 flex flex-col justify-between md:h-52 p-2 bg-no-repeat bg-center bg-cover rounded-md"}>
                <h2>{item.heading}</h2>
                <span className='text-right'>{item.date}</span>
              </div>
            </div>
          )
        })}
  </Slider>
    </div>
  );
}