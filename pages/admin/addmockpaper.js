import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillLock } from 'react-icons/ai';
const addmockpaper = () => {
    const router = useRouter()
  const [creds, setCreds] = React.useState({Id:"", Question:"", Mcq:"",Answer:"", A:"", B:"", C:"", D:""})
  const onChange = (e)=>{
    console.log(creds)
    setCreds({...creds, [e.target.name]: e.target.value})
  }
  React.useEffect(() => {
    if(!localStorage.getItem('admin')){
      router.replace(`/`)
    }
  }, [router.query])
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    let res = await fetch(`/api/admin/addmockpaper`, 
    {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    let json = await res.json()
    if(json.success){
      toast.success('Question Added!!', {
        position: process.env.NEXT_PUBLIC_TOAST_TYPE,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    else{
      toast.error(json.error, {
        position: process.env.NEXT_PUBLIC_TOAST_TYPE,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    setCreds({Id:"", Question:"", Mcq:"",Answer:""})
  }
  return (
    <>
    <section className="min-h-screen text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto" >
    <div className="flex flex-col text-center w-full mb-12" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a MockPaper</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto" >
      <div className="flex flex-wrap -m-2" >
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Mock Paper Name</label>
            <input type="name" id="name" name="name"                   value={creds.name}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="Question" className="leading-7 text-sm text-gray-600">Add questions id (Seperated by comma)</label>
            <input type="Question" id="Question"                   value={creds.Question}
                  onChange={onChange} name="Question" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        

<div className="shadow-md sm:rounded-lg">
    <div className="pb-4 bg-white flex items-center justify-center">
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative ">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center justify-center
             ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" className="block px-10 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for items"/>
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBossssssssssssssssssssssok Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple Watch
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $179
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    iPad
                </th>
                <td className="px-6 py-4">
                    Gold
                </td>
                <td className="px-6 py-4">
                    Tablet
                </td>
                <td className="px-6 py-4">
                    $699
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple iMac 27"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    PC Desktop
                </td>
                <td className="px-6 py-4">
                    $3999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        <div className="p-2 w-full" >
          <button  onClick={handleSubmit} type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default addmockpaper