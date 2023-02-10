import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Menu({cat}) {
  const [posts, setPosts] = useState([])
  

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts`)
        setPosts(res.data)
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData()
  }, [cat])

  return (
    <div className='flex-col basis-[30rem] px-12'>
        <p className='font-bold text-lg'>Other posts you may like</p>
        {posts.map(post => (
            <div className='flex flex-col gap-3 mt-5' key={post.id}>
                <img src={`../upload/${post?.img}`} className="h-full w-full object-cover" alt="thumbnail" />
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