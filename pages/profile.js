import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link"
import { getSession } from 'next-auth/react';
const Profile = ({sess}) => {
  console.log(sess, "SESS")
  const [creds, setCreds] = useState({name:'', email:'', phone:' ', address:' ', pincode:' '})
  const [pass, setPass] = useState('')
  const router = useRouter()
  useEffect(() => {
    if(!sess){
      // router.push('/')
    }
    const res = fetch(`/api/getuser`, {
      method:"POST",
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify({email:sess.user.email})
    })
    res.then(response =>{
      response.json().then(json =>{
        setCreds({name:json.user.name, email:json.user.email,  address: json.user.address, phone: json.user.phone, pincode: json.user.pincode})
        setPass(json.pass)
      })
    })
  }, [])
  const onChange = (e)=>{
    setCreds({...creds, [e.target.name]: e.target.value})
  } 
  const changeDetails = async ()=>{
    let res = await fetch('/api/changeuser', {
      method: "POST",
      headers:{
        'Content-Type': "application/json"
      },
      body: JSON.stringify({creds, email: sess.user.email})
    })  
    let a = await res.json()
    if(a.success){
      toast.success(a.msg, {
        position: process.env.NEXT_PUBLIC_TOAST_TYPE,
        autoClose: 1000,
        className: 'text-lg',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    else{
      toast.error(a.error, {
        position: process.env.NEXT_PUBLIC_TOAST_TYPE,
        autoClose: 1000,
        className: 'text-lg',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
  }
  
  return (
<div className=' dark:bg-gray-800 dark:text-white min-h-screen'>
  <ToastContainer
    position={process.env.NEXT_PUBLIC_TOAST_TYPE}
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
  />
  <h1 className="text-3xl font-bold text-center pt-[7rem]">Your Profile</h1>
  <div className='max-w-4xl mx-auto my-10'>
    <div className='flex flex-wrap'>
      <div className="px-2 w-full md:w-1/2 mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
        <input onChange={onChange} value={creds.name} type="name" id="name" name="name" className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="px-2 w-full md:w-1/2 mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Email (cannot be updated)</label>
        <input disabled value={creds.email} type="email" id="email" name="email" className="w-full bg-gray-300 dark:bg-gray-600 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    </div>
    <div className="px-2 w-full mb-4">
      <label htmlFor="address" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Address</label>
      <textarea onChange={onChange} value={creds.address} id="address" name="address" className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    <div className='flex flex-wrap'>
      <div className="px-2 w-full md:w-1/2 mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Phone</label>
        <input onChange={onChange} maxLength="10" minLength="10" value={creds.phone} type="phone" id="phone" name="phone" className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="px-2 w-full md:w-1/2 mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Pin Code</label>
        <input onChange={onChange} maxLength="6" value={creds.pincode} type="text" id="pincode" name="pincode" className="w-full bg-white dark:bg-gray-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
    </div>
    <div className='flex flex-wrap'>
    <div className="px-2 w-full md:w-1/2 mb-4">
    <button onClick={changeDetails} className="w-full text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">Verify Phone</button>
    </div>
    <div className="px-2 w-full md:w-1/2 mb-4">
      <label htmlFor="password" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Password</label>
      <input value={pass} type="password" id="password" name="password" disabled className="w-full bg-gray-300 dark:bg-gray-600 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 dark:text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    </div>
    </div>
    <div className="mx-4 my-4">
      <button onClick={changeDetails} className="w-full text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">Change your details</button>
    </div>
    <div className="mx-4 my-4">
      <Link href='/changepass'>
        <button className="w-full text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">Change your password</button>
      </Link>
    </div>
  </div>
</div>

  )
}
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  return {
    props: {
      sess:session,
      // csrfToken: await csrfToken(context),
    },
  };
}


export default Profile