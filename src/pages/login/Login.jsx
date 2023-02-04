import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  const [err, setError] = useState(null)
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)


  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name] : e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate('/')
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <>
    <div className='w-full h-screen'>
      <div className='container mx-auto w-1/2 mt-52 bg-white shadow border border-gray-50 p-10'>
        <p className='font-bold text-2xl border-b border-gray-300 mb-8 pb-3'>Login</p>
        <form>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input onChange={handleChange} name='username' type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={handleChange} name='password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required />
          </div>
          
          <div className="flex items-start mt-5 mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          {err && <p className='text-red-500 mt-4'>{err}</p>}
          <p className='mt-5'>Don't you have an account? <Link to={'/register'} className='text-blue-700 font-bold'>Register</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login