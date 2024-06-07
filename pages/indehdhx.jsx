import Link from 'next/link';

export default function Home() {
  return (
<div className="bg-gray-100 min-h-screen">


      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to BangExams</h1>
          <p className="text-lg text-gray-600 mb-8">Your reliable, secure, and qualified source for exam preparation materials</p>
          <Link href="/exams" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">Explore Papers</a>
          </Link>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 mb-4">BangExams is committed to providing:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>High-quality test papers</li>
              <li>Reliable and secure transactions</li>
              <li>Qualified content from experts</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">At BangExams, our mission is to empower students worldwide by providing access to top-notch exam preparation materials that ensure success.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Satisfaction</h2>
            <p className="text-gray-600">We prioritize customer satisfaction above all else. Our dedicated support team is available to assist you every step of the way.</p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Exams</h2>
          {/* Add featured exams section */}
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
    <div class="flex flex-wrap -m-4" bis_skin_checked="1">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
        <div class="h-full text-center" bis_skin_checked="1">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4" bis_skin_checked="1">
        <div class="h-full text-center" bis_skin_checked="1">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p class="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4" bis_skin_checked="1">
        <div class="h-full text-center" bis_skin_checked="1">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </section>
      </main>

    </div>
  );
}

