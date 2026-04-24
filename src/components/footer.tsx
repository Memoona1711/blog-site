import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer_bg text-white pt-24 border-t border-slate-900 relative">
      <div className='relative'>
        <div className="shape-group">
          <div className="shape shape-01">
              <img src="images/banner-shape-03.png" alt="Shape Images" />
          </div>
          <div className="shape shape-02">
              <img src="/images/banner-shape-04.png" alt="Shape Images" />
          </div>
          <div className="shape shape-03">
              <img src="/images/png-tree.png" alt="Shape Images" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TOP SECTION: BIG CTA */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-6">
                Ready to <span className="text-blue-600">elevate</span> <br /> your digital presence?
              </h2>
              <p className="text-whitetext-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
            </div>
            <Link href="/contact" className="group relative px-12 py-6 bg-blue-600 rounded-full font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all hover:bg-white hover:text-black">
              <span className="relative z-10">Start a Project →</span>
            </Link>
          </div>

          {/* MIDDLE SECTION: LINKS & INFO */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-slate-900">
            
            {/* Brand Info */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-black tracking-tighter mb-6">DEV.<span className="text-blue-600">INSIGHTS</span></h3>
              <p className="text-white text-sm leading-relaxed max-w-[200px]">
                Building premium digital experiences with Next.js and Tailwind CSS.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'Articles', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-whitehover:text-white transition text-sm font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">Connect</h4>
              <ul className="space-y-4">
                {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((social) => (
                  <li key={social}>
                    <a href="#" className="text-whitehover:text-white transition text-sm font-medium ">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">Location</h4>
              <p className="text-whitetext-sm leading-relaxed ">
               Lorem Ipsum is simply dummy text of the
              </p>
              <p className="text-white font-bold mt-4 text-sm tracking-tighter underline decoration-blue-600 decoration-2">
                abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className='max-w-7xl mx-auto'>
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6 ">
            <div className="text-center md:text-left">
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest text-white">
                © 2026 Dev Insights. All Rights Reserved.
              </p>
            </div>
            <div className="flex gap-8 justify-center md:justify-end ">
              <span className="text-slate-600 text-white text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-blue-600 transition">
                Privacy Policy
              </span>
              <span className="text-white text-slate-600 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-blue-600 transition">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;