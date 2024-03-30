import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function MainSlider() {

  const settings = {
    arrows: false,
    dots: false,
    // Наличие точек
    infinite: true,
    // Бесконечный слайдер
    speed: 500,
    // Скорость прокрутки
    slidesToShow: window.screen.width >= 768 ? 4 : 2,
    // Количество видимых слайдов
    slidesToScroll: 2,
    // Количество которые скролятся за один свайп
  };
  const sliderInfo = [
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_1",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_1",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_1",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_1",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_2",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_2",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_2",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_2",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_2",
    },
    {
      heading: 'Отдыхаю на природе',
      date: '20.10.2024',
      photo: "sl_pic_2",
    },
  ]
  const sliderItems = sliderInfo.map( item => {
    const bgPic = `bg-${item.photo}`
    return(
      <div className='p-4'>
        <div className={"w-full h-48 flex flex-col justify-between md:h-52 p-2 bg-no-repeat " + bgPic}>
          <h2>{item.heading}</h2>
          <span className='text-right'>{item.date}</span>
        </div>
      </div>
    )
  })
  console.log(sliderItems);
  return (
    <div className="mt-4">
      {/* <div className="hidden bg-sl_pic_1 bg-sl_pic_2"></div> */}
      <Slider {...settings}>
        {sliderItems}
      </Slider>
    </div>
  );
}