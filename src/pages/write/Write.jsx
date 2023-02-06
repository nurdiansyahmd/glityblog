import axios from 'axios'
import moment from 'moment'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Write() {
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || '')
  const [title, setTitle] = useState(state?.title || '')
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || '')
  const navigate = useNavigate()

  const upload = async() =>{
    try{
      const formData = new FormData()
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    const imgUrl = await upload()

    try{
      state ? await axios.put(`/posts/${state.id}`, {
        title, 
        desc:value, 
        cat, 
        img:file ? imgUrl : ""
      }) : await axios.post(`/posts/`, {
        title, 
        desc:value, 
        cat, 
        img:file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      })
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex mt-10">
      <div className='basis-[100rem]'>
        <input type="text" value={title} placeholder='Title' className='mb-5 border-gray-300 w-full' onChange={e=>setTitle(e.target.value)} />
        <div className="h-[600px]">
          <ReactQuill theme="snow" value={value} onChange={setValue} className="h-full" />
        </div>
      </div>
      <div className="basis-[30rem] px-10">
        <div className="flex flex-col gap-2 item-publish">
          <h1 className='font-bold'>Publish</h1>
          <span><b>Status: </b> Draft</span>
          <span><b>Visibility: </b> Public</span>
          <label className="block font-bold text-gray-900 dark:text-white" htmlFor="file_input">Upload Image:</label>
          <input onChange={e=>setFile(e.target.files[0])} id="file_input" name='file' type="file" className="block mb-5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
          <button type="button" className="text-gray-900 w-36 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Save as a draft</button>
          <button onClick={handleSubmit} type="button" className="focus:outline-none w-36 text-white bg-[#02a8ae] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </div>
        <div className="item-category mt-5">
          <h3 className="mb-3 font-bold dark:text-white">Category</h3>
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input checked={cat === "art"} onChange={e=>setCat(e.target.value)} id="art" type="radio" name="cat" value="art" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="art" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Art</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input checked={cat === "science"} onChange={e=>setCat(e.target.value)} id="science" type="radio" name="cat" value="science" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="science" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">science</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input checked={cat === "Technology"} onChange={e=>setCat(e.target.value)} id="Technology" type="radio" name="cat" value="Technology" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="Technology" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Technology</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input checked={cat === "cinema"} onChange={e=>setCat(e.target.value)} id="cinema" type="radio" name="cat" value="cinema" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="cinema" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cinema</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input checked={cat === "design"} onChange={e=>setCat(e.target.value)} id="design" type="radio" name="cat" value="design" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="design" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Design</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input checked={cat === "food"} onChange={e=>setCat(e.target.value)} id="food" type="radio" name="cat" value="food" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="food" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Food</label>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Write