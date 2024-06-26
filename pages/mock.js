import React from 'react';
import Link from 'next/link';
export default function Mock() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-white mb-4">Available Mock Papers for exams</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ExamCard
            name="REET"
            description="The Rajasthan Eligibility Examination for Teachers (REET) is a state-level exam conducted by the Rajasthan Board of Secondary Education (RBSE). It is an essential exam for candidates aspiring to become teachers in government schools of Rajasthan."
            syllabus="The syllabus includes Child Development and Pedagogy, Language I and II (Sanskrit, English, Hindi, Urdu, Sindhi, Punjabi, and Gujarati), Mathematics, and Environmental Studies."
          />
          <ExamCard
            name="IAS Officer"
            description="The Indian Administrative Service (IAS) exam is one of the most prestigious exams conducted by the Union Public Service Commission (UPSC). It is a national-level exam aimed at recruiting officers for the Indian Administrative Service, one of the top civil services in India."
            syllabus="The IAS exam consists of three stages - Preliminary Examination, Main Examination, and Personality Test (Interview). The syllabus includes topics such as History, Geography, Indian Polity, Economy, Environment, and Current Affairs."
          />
          <ExamCard
            name="RAS Officer"
            description="The Rajasthan Administrative Service (RAS) exam is a state-level exam conducted by the Rajasthan Public Service Commission (RPSC). It is conducted to recruit officers for administrative positions in the state of Rajasthan."
            syllabus="The RAS exam consists of three stages - Preliminary Examination, Main Examination, and Personality Test (Interview). The syllabus includes topics such as History, Geography, Economy, Polity, Current Affairs, and Rajasthan-specific subjects."
          />
          {/* Add more exams */}
        </ul>
      </main>
    </div>
  );
}

// Component for rendering each exam card
const ExamCard = ({ name, description, syllabus }) => (
  <li className="bg-gray-800 rounded-lg shadow-md overflow-hidden border-gray-200">
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
