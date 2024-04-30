import React from 'react'
import Link from 'next/link';
const slug = () => {
  const mockPapers = [
    { id: 1, name: 'Mock Test 1', description: 'Full-length mock test covering all subjects', price: '$10' },
    { id: 2, name: 'Mock Test 2', description: 'Mock test focusing on Mathematics', price: '$8' },
    // Add more mock papers
  ];
  return (
    <>
    <div className="bg-gray-100">

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">REET Test Papers</h1>
          <p className="text-lg text-gray-600">Prepare for your REET exam with our comprehensive test papers.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPapers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{paper.name}</h2>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <p className="text-gray-800 font-semibold">{paper.price}</p>
              </div>
              <div className="bg-blue-500 text-white text-center py-2">
                <Link href="#" legacyBehavior>
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

export default slug