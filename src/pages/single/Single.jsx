import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import moment from 'moment/moment'
import { AuthContext } from '../../context/AuthContext'

function Single() {
  const [post, setPost] = useState({})
  const {currentUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  
  // get id from url
  const postId = location.pathname.split("/")[2]

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err);
      }
    }    
    fetchData()
  }, [postId])

  const handleDelete = async() =>{
    try {
      await axios.delete(`/posts/${postId}`)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='flex flex-row mt-10 h-[900px]'>
      <div className='basis-[70rem]'>
        <div className="flex flex-col">
          <img src={`../upload/${post?.img}`} className='h-96 w-full object-cover' alt="thumb" />
          <div className="flex flex-row mt-10 items-center">
            {post.userImage && <img src={post.userImage} className='h-12 w-12 rounded-full mr-3' alt="user-thumb" />}
            <div className="flex flex-col">
              <p className='font-bold'>{post.username}</p>
              <div className="flex flex-row gap-3 items-center">
                <p>Posted {moment(post.date).fromNow()}</p>
                {currentUser !== null && (
                  <>
                  <div>
                  <Link to={`/write?edit=2`} state={post}>
                    <svg aria-hidden="true" className='h-6 w-6 text-green-500' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </Link>
                </div>
                <div>
                <div className='cursor-pointer' onClick={handleDelete}>
                  <svg aria-hidden="true" className='h-6 w-6 text-red-500' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" fillRule="evenodd" />
                  </svg>
                </div>
                </div>
                  </>
                )}
                
              </div>
            </div>
          </div>
        </div>
        <h1 className='font-bold text-xl mt-10'>{post.title}</h1>
        <p className='mt-5 text-justify leading-8'>{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single