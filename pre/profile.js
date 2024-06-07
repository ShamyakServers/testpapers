import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link"
import { getSession } from 'next-auth/react';
const Profile = ({sess}) => {
  console.log(sess)
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
    <div className='dark:bg-gray-800 dark:text-white min-h-screen'>
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
        <h1 className="text-3xl font-bold text-center my-5">Your Profile</h1>
      <div className='mx-auto flex my-10'>
       
       <div className="px-2 w-1/2" >
         <div className=" mb-4">
           <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
           <input onChange={onChange} value={creds.name} type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
         </div>
       </div>
       <div className="px-2 w-1/2" >
         <div className=" mb-4">
           <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email (cannot be updated)</label>
           <input disabled value={creds.email} type="email" id="email" name="email" className="w-full bg-white disabled:bg-gray-300 rounded border border-gray-300 focus:border-blue-500\ focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
         </div>
       </div>
     </div>
     <div className="px-2 w-full" >
       <div className=" mb-4">
         <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
         <textarea onChange={onChange} value={creds.address} type="address" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500\ focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
       </div>
     </div>
     <div className='mx-auto flex'>
       <div className="px-2 w-1/2" >
         <div className=" mb-4">
           <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
           <input onChange={onChange} maxLength={'10'} minLength={'10'} value={creds.phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500\ focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
         </div>
       </div>
       <div className="px-2 w-1/2" >
         <div className=" mb-4">
           <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
           <input onChange={onChange} maxLength={'6'} value={creds.pincode} type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
         </div>
       </div>

       </div>
       <div className="mx-4 my-0">
      <button  onClick={changeDetails} className="inline text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none  hover:bg-blue-600 rounded text-lg w-full">Change your details</button>
      </div>
       <div className="px-2 w-full" >
       <div className=" mb-4">
         <label htmlFor="address" className="leading-7 text-sm text-gray-600">Password</label>
         <input value={pass} type="password" id="password" name="password" disabled className="w-full disabled:bg-gray-300 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
       </div>
     </div>
     <div className="mx-4 my-0">
      <Link href={'/changepass'}><button className="inline text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none  hover:bg-blue-600 rounded text-lg w-full">Change your password</button></Link>
      </div>
     
     </div>
  )
}
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  console.log(session, "SERVERSIDE")
  return {
    props: {
      sess:session,
      // csrfToken: await csrfToken(context),
    },
  };
}


export default Profile