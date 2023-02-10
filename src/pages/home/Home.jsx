import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }

    fetchData()
  }, [cat])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
      <>
      <div className='h-[900px]'>
        <p className='font-bold uppercase text-xl'>artikel blog</p>
        {posts.map(post=>(
          <div className='flex mt-32 mt-10' key={post.id}>
            <img src={`../upload/${post.img}`} alt="thumb" className='w-96'/>
            <div className="flex flex-col ml-10 mr-10 justify-between">
                <p className='bg-gray-100 w-[80px] font-bold text-gray-600 px-4 py-1 rounded text-sm'>{post.cat}</p>
              <Link to={`/post/${post.id}`}><p className='font-bold text-2xl mt-5'>{post.title}</p></Link>
              <p className='max-w-xl'>{getText(post.desc)}</p>
              <Link to={`/post/${post.id}`}>
                <button type="button" className="text-gray-900 mt-10 w-32 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </>
  )
}

export default Home