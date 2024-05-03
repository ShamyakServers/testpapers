import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import Question from '@/models/Question';
// import MockPaper from '@/models/MockPaper';
import mongoose from 'mongoose';
const addmockpaper = ({questions}) => {
    const router = useRouter()
  const [creds, setCreds] = React.useState({name:"", Questions:"", price:"", time:""})
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
    let res = await fetch(`http://localhost:3000/api/admin/addmockpaper`, 
    {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    let json = await res.json()
    console.log(json)
    if(json.success){
      toast.success('Mock Paper Successfully created Added!!', {
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
    // setCreds({name:"", Questions:"", price:"", time:""})
  }
  return (
    <>
    <section className="min-h-screen text-gray-600 body-font w-full">
  <div className="container px-5 py-24 mx-auto" >
    <div className="flex flex-col text-center w-full mb-12" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a MockPaper</h1>
    </div>
    <div className="w-full mx-auto" >
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
            <label htmlFor="Questions" className="leading-7 text-sm text-gray-600">Add questions id (Seperated by comma)</label>
            <input type="Questions" id="Questions"                   value={creds.Questions}
                  onChange={onChange} name="Questions" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
            <input type="price" id="price" name="price"                   value={creds.price}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="time" className="leading-7 text-sm text-gray-600">Time (In MINUTES)</label>
            <input type="text" id="time" name="time"                   value={creds.time}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        

<div className="shadow-md sm:rounded-lg mt-10 w-full">

    <table className="w-[90%] text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Serial Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Question
                </th>
                <th scope="col" className="px-6 py-3">
                    Solution/Mcq Answer
                </th>
                <th scope="col" className="px-6 py-3">
                    Option A
                </th>
                <th scope="col" className="px-6 py-3">
                Option B
                </th>
                <th scope="col" className="px-6 py-3">
                Option C
                </th>
                <th scope="col" className="px-6 py-3">
                Option D
                </th>
                <th scope="col" className="px-6 py-3">
                Question Id
                </th>
                <th scope="col" className="px-6 py-3">
                Mock Paper Id
                </th>
            </tr>
        </thead>
        <tbody>
            {questions.map((ques, index)=>{
                return   <tr key={ques._id} className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {index+1}
                </th>
                <td className="px-6 py-4">
                    {ques.question}
                </td>
                <td className="px-6 py-4">
                    {ques.solution}
                </td>
                <td className="px-6 py-4">
                    {ques.options.A}
                </td>
                <td className="px-6 py-4">
                    {ques.options.B}
                </td>
                <td className="px-6 py-4">
                {ques.options.C}
                </td>
                <td className="px-6 py-4">
                {ques.options.D}
                </td>
                <td className="px-6 py-4">
                {ques._id}
                </td>
            </tr>
            })}

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
export async function getServerSideProps(context) {
    if(!mongoose.connection[0]){
        await mongoose.connect(process.env.MONGODB_URI  );
    }
    const questions = await Question.find();  

    let ques = JSON.parse(JSON.stringify(questions))
    return {
      props: {
        questions:ques,
      },
    };
  }