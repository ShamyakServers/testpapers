// pages/preview.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MockPaper from '@/models/MockPaper';
import Question from '@/models/Question';
import mongoose from 'mongoose';
import { useRouter } from 'next/router';
const slug =  ({ title, desc, price, time, questions, id }) => {
  const router = useRouter()
  // Disable right-click, Ctrl+C, and F12 key
  let warnings = 1
  const redirectp = ()=>{
    router.push("/buy/" + id)
  }
  useEffect(() => {
    const disableCopy = (e) => {
      if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        alert("𝗗𝗼𝗻'𝘁 𝘁𝗿𝘆 𝘁𝗼 𝗰𝗼𝗽𝘆 𝗮𝗻𝘆𝘁𝗵𝗶𝗻𝗴 𝗲𝗹𝘀𝗲 𝘆𝗼𝘂𝗿 𝗶𝗽 𝗮𝗱𝗱𝗿𝗲𝘀𝘀 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗽𝘂𝘁 𝗼𝗻 𝗯𝗹𝗮𝗰𝗸 𝗹𝗶𝘀𝘁 𝗮𝗻𝗱 𝘁𝗵𝗲𝗻 𝘆𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝗴𝗮𝗶𝗻 𝗮𝗰𝗰𝗲𝘀𝘀 𝘁𝗼 𝘁𝗵𝗶𝘀 𝘀𝗶𝘁𝗲.")
      }
    };
    const disablekey = ()=>{
      
    }

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
    <h1 className='bg-gray-100 font-semibold text-3xl text-center pt-10  '> Preview of the Mock Paper - {title}.</h1>
     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Head>
        <title>Mock Paper Preview - {title}</title>
      </Head>
      
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 mb-8">{desc}</p>
        <ul className=" pl-5 mb-8">
          {questions.map((question, index) => {
            if(index >= 5){return }
           return <li key={index} className="mb-4">
              <p className="font-semibold">Q{index+1}. {question.question}</p>
              {question.mcq && (
                <div className="mt-2">
                  {Object.entries(question.options).map(([key, value]) => (
                    <label key={key} className="block">
                      <input type="radio" className="mr-2" name={`question_${index}`} value={key} disabled />
                      {key}: {value}
                    </label>
                  ))}
                </div>
              )}
            </li>
})}
      <p className='text-2xl'>Buy or subscribe to access mock paper...</p>
      <button onClick={redirectp()} type="button" class="m-6 p-6 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy for ₹{price - (price/100)*10} only <span style={{'text-decoration-thickness': '0.25rem'}} className='font-semibold line-through decoration-black'>₹{price}</span></button>
      <button type="button" class="m-6 p-6 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe to our app</button>
        </ul>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-xl font-semibold">Time Required:</p>
            <p className="text-xl">{time} minutes</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default slug
export async function getServerSideProps(context) {
  if(!mongoose.connection[0]){
      await mongoose.connect(process.env.MONGODB_URI  );
  }
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
      title:mocks[0].title,
      desc: mocks[0].desc,
      price: mocks[0].price,
      time: mocks[0].time ,
      questions: JSON.parse(JSON.stringify(qu)),
      id:String(mocks[0]._id)
    },
  };
}