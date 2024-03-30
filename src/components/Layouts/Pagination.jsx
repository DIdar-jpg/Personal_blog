import React from 'react'

export default function Pagination() {
  const routs = [
    {
      adress: '###',
      pageCount: 1,
      isActive: true,
    },
    {
      adress: '###',
      pageCount: 2,
      isActive: false,
    },
    {
      adress: '###',
      pageCount: 3,
      isActive: false,
    },
    {
      adress: '###',
      pageCount: 4,
      isActive: false,
    },
  ]
  return (
    <div className="w-full flex justify-center">
      <div className="w-64 flex justify-between items-center mb-10">
        <div className='w-10 h-10 bg-header-black flex items-center justify-center'>{'<'}</div>
          {
            routs.slice(0,3).map( rout => {
              return rout.isActive ? 
                <div className='w-10 h-10 bg-[#104BE3] flex items-center justify-center'>
                  {rout.pageCount}
                </div> :
                <div className='w-10 h-10 bg-header-black flex items-center justify-center'>
                  {rout.pageCount}
                </div>
            })
          }
        <div className='w-10 h-10 bg-header-black flex items-center justify-center'>{'>'}</div>
      </div>
    </div>
  )
}
