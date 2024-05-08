// Import necessary libraries
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import mongoose from 'mongoose';
import { getSession } from 'next-auth/react';
import MockPaper from '@/models/MockPaper';
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Question from '@/models/Question';
export default function slug({ title, desc, price, time, questions, id , sess}) {
    const router = useRouter()
    // Disable right-click, Ctrl+C, and F12 key
    const redirectp =async  ()=>{
      console.log(sess)
      if(!sess){
        toast.success('Please login first and then buy the mock paper. Redirecting to the login page...', {
          position: 'top-right',
          autoClose: 1000,
          className: 'text-lg',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          });
          setTimeout(()=>{
            router.replace("/login")
          }, 1000)
          
      }
      else{
      router.push("/buy/" + id)
  
      }
    }
    useEffect(() => {
      const disableCopy = (e) => {
        if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          alert("𝗗𝗼𝗻'𝘁 𝘁𝗿𝘆 𝘁𝗼 𝗰𝗼𝗽𝘆 𝗮𝗻𝘆𝘁𝗵𝗶𝗻𝗴 𝗲𝗹𝘀𝗲 𝘆𝗼𝘂𝗿 𝗶𝗽 𝗮𝗱𝗱𝗿𝗲𝘀𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗽𝘂𝘁 𝗼𝗻 𝗯𝗹𝗮𝗰𝗸 𝗹𝗶𝘀𝘁 𝗮𝗻𝗱 𝘁𝗵𝗲𝗻 𝘆𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝗴𝗮𝗶𝗻 𝗮𝗰𝗰𝗲𝘀𝘀 𝘁𝗼 𝘁𝗵𝗶𝘀 𝘀𝗶𝘁𝗲.")
        }
      };
  
      const disableF12 = (e) => {
        if (e.keyCode === 123) {
          e.preventDefault();
        }
      };
  
      window.addEventListener('keydown', disableCopy);
      window.addEventListener('keydown', disableF12);
  
      return () => {
        window.removeEventListener('keydown', disableCopy);
        window.removeEventListener('keydown', disableF12);
      };
    }, []);
  
    return (
      <>   
              <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
          />
      <h1 className='bg-gray-100 font-semibold text-3xl text-center pt-10  '> Buying Mock Paper - {title}.</h1>
       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <Head>
          <title>Buying Mock Paper - {title}</title>
          
        </Head>
        
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-700 mb-8">{desc}</p>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Time Required:</p>
              <p className="text-xl">{time} minutes</p>
            </div>
            <button onClick={()=>{redirectp()}} type="button" class="m-6 p-6 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy for ₹{price - (price/100)*10} only <span style={{'text-decoration-thickness': '0.25rem'}} className='font-semibold line-through decoration-black'>₹{price}</span></button>
      <button type="button" class="m-6 p-6 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe to our app</button>
          </div>
        </div>
      </div>
      </>
    );
  }

  export async function getServerSideProps(context) {
    const {req} = context
    if(!mongoose.connection[0]){
        await mongoose.connect(process.env.MONGODB_URI  );
    }
    const session = await getSession({req})
    const mocks = await MockPaper.find({_id:context.query.slug});  
    let q = mocks[0].questions
    let qu = []
    for(let i = 0; i < q.length; i++){
      let qe = await Question.findById(q[i])
      qu.push(qe)
    }
    let mocka = JSON.parse(JSON.stringify(mocks[0]))
    return {
      props: {
        sess:session,
        title:mocks[0].title,
        desc: mocks[0].desc,
        price: mocks[0].price,
        time: mocks[0].time ,
        questions: JSON.parse(JSON.stringify(qu)),
        id:String(mocks[0]._id)
      },
    }
  }