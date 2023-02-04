import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Write() {
  const [value, setValue] = useState('')

  return (
    <div className="flex mt-10">
      <div className='basis-[100rem]'>
        <input type="text" placeholder='Title' className='mb-5 border-gray-300 w-full' />
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
          <input id="file_input" name='file' type="file" className="block mb-5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
          <button type="button" className="text-gray-900 w-36 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Save as a draft</button>
          <button type="button" className="focus:outline-none w-36 text-white bg-[#02a8ae] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
        </div>
        <div className="item-category mt-5">
          <h3 className="mb-3 font-bold dark:text-white">Category</h3>
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="art" type="radio" defaultValue name="cat" value="art" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="art" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Art</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="science" type="radio" defaultValue name="cat" value="science" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="science" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">science</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="Technology" type="radio" defaultValue name="cat" value="Technology" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="Technology" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Technology</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="cinema" type="radio" defaultValue name="cat" value="cinema" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="cinema" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cinema</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="design" type="radio" defaultValue name="cat" value="design" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="design" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Design</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="food" type="radio" defaultValue name="cat" value="food" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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