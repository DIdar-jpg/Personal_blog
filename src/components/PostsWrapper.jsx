import React from 'react'

export default function PostsWrapper() {
    const postsData = [
        {
            title: null,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora similique consequatur consequuntur dicta id? Reprehenderit libero sed consectetur itaque culpa ullam! Illo, corporis molestiae! Temporibus natus facere dolorem accusantium voluptatibus!
            Odit id tempora, ipsum unde inventore eaque consectetur aliquid perspiciatis suscipit veniam maxime quia hic in minus quidem totam beatae labore, nobis nemo obcaecati illo? Magnam, mollitia non! Voluptas, neque?
            Est doloribus hic assumenda deserunt distinctio pariatur, laudantium a, nesciunt mollitia tempore aliquam saepe dolore sed commodi veniam facilis excepturi libero necessitatibus unde nobis nostrum dolor molestiae doloremque! Et, magnam.`,
            date: '21.06.2024',
            tags: null,
            img: null,
            video: null,
        },
        {
            title: 'Как писать код быстро и безболезненно?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora similique consequatur consequuntur dicta id? Reprehenderit libero sed consectetur itaque culpa ullam! Illo, corporis molestiae! Temporibus natus facere dolorem accusantium voluptatibus!
            Odit id tempora, ipsum unde inventore eaque consectetur aliquid perspiciatis suscipit veniam maxime quia hic in minus quidem totam beatae labore, nobis nemo obcaecati illo? Magnam, mollitia non! Voluptas, neque?
            Est doloribus hic assumenda deserunt distinctio pariatur, laudantium a, nesciunt mollitia tempore aliquam saepe dolore sed commodi veniam facilis excepturi libero necessitatibus unde nobis nostrum dolor molestiae doloremque! Et, magnam.`,
            date: '21.06.2024',
            tags: ['Программирование', 'Создание сайтов', 'FrontEnd', 'BackEnd'],
            img: 'https://upload.wikimedia.org/wikipedia/ru/2/26/V_City-PS2.jpg',
            video: null,
        },
        {
            title: 'Устроился преподавтелем в ITEA',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora similique consequatur consequuntur dicta id? Reprehenderit libero sed consectetur itaque culpa ullam! Illo, corporis molestiae! Temporibus natus facere dolorem accusantium voluptatibus!
            Odit id tempora, ipsum unde inventore eaque consectetur aliquid perspiciatis suscipit veniam maxime quia hic in minus quidem totam beatae labore, nobis nemo obcaecati illo? Magnam, mollitia non! Voluptas, neque?
            Est doloribus hic assumenda deserunt distinctio pariatur, laudantium a, nesciunt mollitia tempore aliquam saepe dolore sed commodi veniam facilis excepturi libero necessitatibus unde nobis nostrum dolor molestiae doloremque! Et, magnam.`,
            date: '21.06.2024',
            tags: ['Программирование', 'Создание сайтов', 'FrontEnd', 'BackEnd'],
            img: 'https://vsviti.com.ua/wp-content/uploads/2021/10/itea-1.jpg',
            video: null,
        },
        {
            title: 'Об обновлении react',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora similique consequatur consequuntur dicta id? Reprehenderit libero sed consectetur itaque culpa ullam! Illo, corporis molestiae! Temporibus natus facere dolorem accusantium voluptatibus!
            Odit id tempora, ipsum unde inventore eaque consectetur aliquid perspiciatis suscipit veniam maxime quia hic in minus quidem totam beatae labore, nobis nemo obcaecati illo? Magnam, mollitia non! Voluptas, neque?
            Est doloribus hic assumenda deserunt distinctio pariatur, laudantium a, nesciunt mollitia tempore aliquam saepe dolore sed commodi veniam facilis excepturi libero necessitatibus unde nobis nostrum dolor molestiae doloremque! Et, magnam.`,
            date: '21.06.2024',
            tags: ['Создание сайтов', 'FrontEnd'],
            img: null,
            video: null,
        },
    ]
    return (
        <div className='w-full flex-wrap justify-between md:flex'>
            {postsData.map(item => {
                const width = item.img || item.video ? 'md:w-[49%]' : 'md:w-full'
                return(
                    // <div className='md:w-[49%]'></div>

                    <div className={"w-full bg-coal shadow-xl rounded-md mb-5 " + width}>
                        {item.img ? <img src={item.img} alt='###' className='w-full max-h-52 rounded-md md:max-h-64'/> : null}
                        {item.video ? <video><source src=''/></video> : null}
                        <div className="p-4">
                            {item.title ? <h3 className='text-lg font-medium mb-5'>{item.title}</h3> : null }
                            <p className="text-grey-1 leading-6">
                                {item.text.split(' ').slice(0, 25).join(' ')}
                            </p>
                            {
                                item.tags ? 
                                    <div className="flex w-full items-center flex-wrap mt-4">
                                        <span className='text-grey-2 mr-4 mb-2 lg:text-white'>{item.date}</span>
                                        <span className='w-2 h-2 bg-[#C4C4C4] rounded-full mr-4 mb-2'></span>
                                        { item.tags.map( tag => <span className='mr-4 mb-2 text-grey-2'>{tag}</span>)}
                                    </div>
                                    : <span className='block mt-4 text-grey-2 text-xs'>{item.date}</span>
                            }
                            
                        </div>

                    </div>
                )
                })
            }
        </div>
    )
}
