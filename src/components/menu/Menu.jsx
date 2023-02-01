import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const posts = [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet repellat?',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae totam accusamus, sit optio odit nobis, harum reprehenderit vero, veniam quo ipsa repellendus perferendis laborum.',
          img: 'https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 2,
          title: 'Lorem ipsum elit. Optio id vitae eius.',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae totam accusamus, sit optio odit nobis, harum reprehenderit vero, veniam quo ipsa repellendus perferendis laborum.',
          img: 'https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae totam accusamus, sit optio odit nobis, harum reprehenderit vero, veniam quo ipsa repellendus perferendis laborum.',
          img: 'https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit, Explicabo.',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae totam accusamus, sit optio odit nobis, harum reprehenderit vero, veniam quo ipsa repellendus perferendis laborum.',
          img: 'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae totam accusamus, sit optio odit nobis, harum reprehenderit vero, veniam quo ipsa repellendus perferendis laborum.',
          img: 'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
      ]

  return (
    <div className='flex-col basis-[30rem] px-12'>
        <p className='font-bold text-lg'>Other posts you may like</p>
        {posts.map(post => (
            <div className='flex flex-col gap-3 mt-5' key={post.id}>
                <img src={post.img} className="h-full w-full object-cover" alt="thumbnail" />
                <p className='font-bold text-lg'>{post.title}</p>
                <Link to={`/post/${post.id}`}>
                    <button type="button" className="text-gray-900 w-24 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Read More</button>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu