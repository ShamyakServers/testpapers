import React, {useEffect} from 'react';

import 'aos/dist/aos.css';

import AOS from 'aos';
import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import HeroHome from '../components/HeroHome';
import FeaturesBlocks from '../components/FeaturesBlocks';
import FeaturesZigZag from '../components/FeaturesZigzag';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [router.query]);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;