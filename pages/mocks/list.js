import React from 'react'
import Link from 'next/link';
import MockPaper from '@/models/MockPaper';
import mongoose from 'mongoose';
const slug = ({mockPapers}) => {

  return (
    <>
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">REET Mock Papers</h1>
          <p className="text-lg text-gray-600">Prepare for your REET exam with our comprehensive test papers.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPapers.map((paper) => (
            <div key={paper._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{paper.title}</h2>
                <p className="text-gray-600 mb-4 text-xl">{paper.desc}</p>
                <p className="text-gray-800 font-semibold text-lg">₹{paper.price}</p>
              </div>
              <div className="bg-blue-500 text-white text-center py-2">
                <Link href={'/preview/' + paper._id}  legacyBehavior>
                  <a className="font-semibold hover:underline">Buy Now</a>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>

</>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connection[0]){
      await mongoose.connect(process.env.MONGODB_URI  );
  }
  // console.log(context.query.ex)
  const mocks = await MockPaper.find({examRelated:context.query.ex});  

  let mocka = JSON.parse(JSON.stringify(mocks))
  return {
    props: {
      mockPapers:mocka,
    },
  };
}
export default slug