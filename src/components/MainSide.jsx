import React from 'react';
import Header from './Layouts/Header';
import Pagination from './Layouts/Pagination';
import MainSlider from './MainSlider';
import PostsWrapper from './PostsWrapper';
export default function MainSide() {
  return (
      <main>
        <Header />
        <section className='container'>
          <MainSlider />
          <PostsWrapper />
          <Pagination />
        </section>
      </main> 
  )
}
