import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillLock } from 'react-icons/ai';
const addquestion = () => {
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
    let res = await fetch(`/api/admin/addquestion`, 
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
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a question</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto" >
      <div className="flex flex-wrap -m-2" >
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="Id" className="leading-7 text-sm text-gray-600">Mock Paper Id</label>
            <input type="Id" id="Id" name="Id"                   value={creds.Id}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="Question" className="leading-7 text-sm text-gray-600">Question</label>
            <input type="Question" id="Question"                   value={creds.Question}
                  onChange={onChange} name="Question" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="Mcq" className="leading-7 text-sm text-gray-600">Mcq Or not (Type true or false)</label>
            <input type="Mcq" id="Mcq" name="Mcq"                   value={creds.Mcq}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="A" className="leading-7 text-sm text-gray-600">IF MCQ OPTION A</label>
            <input type="A" id="A" name="A"                   value={creds.A}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="B" className="leading-7 text-sm text-gray-600">IF MCQ OPTION B</label>
            <input type="B" id="B" name="B"                   value={creds.B}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="C" className="leading-7 text-sm text-gray-600">IF MCQ OPTION C</label>
            <input type="C" id="C" name="C"                   value={creds.C}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="D" className="leading-7 text-sm text-gray-600">IF MCQ OPTION D</label>
            <input type="D" id="D" name="D"                   value={creds.D}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="Answer" className="leading-7 text-sm text-gray-600">Answer (Option A/B/C/D [In case of mcq])</label>
            <input type="Answer" id="Answer" name="Answer"                   value={creds.Answer}
                  onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full" >
          <div className="relative" >
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Any other</label>
            <input type="email" id="email" name="email"       className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
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

export default addquestion