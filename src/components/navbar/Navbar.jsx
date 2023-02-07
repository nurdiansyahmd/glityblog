import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import 'flowbite'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const {currentUser, logout} = useContext(AuthContext)

  return (
    <>
    <nav className="bg-white border-gray-200 py-4 rounded dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-[45px] w-30 items-center" alt="Logo" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-[#02a8ae]" type="button">LEARN<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
              {/* Dropdown menu */}
              <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Javascript</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ReactJS</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NodeJS</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Laravel</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownBlogButton" data-dropdown-toggle="dropdownBlog" className="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-[#02a8ae]" type="button">BLOG<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
              {/* Dropdown menu */}
              <div id="dropdownBlog" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBlogButton">
                  <li>
                    <a href="/?cat=art" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Art</a>
                  </li>
                  <li>
                    <a href="/?cat=science" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Science</a>
                  </li>
                  <li>
                    <a href="/?cat=technology" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Technology</a>
                  </li>
                  <li>
                    <a href="/?cat=design" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</a>
                  </li>
                </ul>
              </div>
            </li>
            {currentUser ?          
            (<li>
              <div className="flex items-center ml-5 md:order-2">
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src={currentUser?.img} alt="user" />
                </button>
                <span className='ml-3 font-bold'>{currentUser?.username}</span>
                {/* Dropdown menu */}
                <div className="z-50 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">{currentUser?.username}</span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{currentUser?.email}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a href="/write" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Write</a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <Link to={'/'}>
                        <span onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</span>
                        </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>)
              : (<li><Link to="/login">Login</Link></li>) 
              }        
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar