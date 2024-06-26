import React from 'react';
import Link from 'next/link';
import { signIn, getProviders, getSession, signOut } from "next-auth/react";
import mongoose from 'mongoose';
import Quiz from "/models/Quiz"
export default function Mock({quizzes}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-white mb-4">Available Quizzes to Solve</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizzes.map((quiz)=>{
            <ExamCard name={quiz.name} title ={quiz.title}description={quiz.desc}></ExamCard>
          })}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
    if(!mongoose.connection[0]){
        await mongoose.connect(process.env.MONGODB_URI  );
    }
    // console.log(context.query.ex)
    const quizzes = await Quiz.find();  
  
    let quizzeas = JSON.parse(JSON.stringify(quizzes))
    return {
      props: {
        quizzes: quizzeas,
      },
    };
  }

// Component for rendering each exam card
const ExamCard = ({ name, description, syllabus }) => (
  <li className="bg-gray-900 rounded-lg shadow-md overflow-hidden border-gray-200">
    <div className="p-6 h-64">
      <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
      <p className="text-gray-100 mb-4">{description}</p>
    </div>
    <div className="bg-blue-500 text-white text-center py-3">
      <Link href={"/mocks/list?ex=" + name} legacyBehavior>
        <a className="font-semibold hover:underline">Read More</a>
      </Link>
    </div>
  </li>
);
