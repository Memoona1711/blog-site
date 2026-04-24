"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '../components/blog-data';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Home() {
  // --- DATA FOR SECTIONS ---
  const posts = [
    {
      id: 1,
      title: "How to Scale Next.js Applications in 2026",
      excerpt: "Deep dive into performance optimization and server components...",
      category: "Engineering",
      date: "April 22",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    },
    {
      id: 2,
      title: "Designing with Tailwind: A Masterclass",
      excerpt: "Learn how to build beautiful interfaces without leaving your HTML...",
      category: "Design",
      date: "April 20",
      image: "https://images.unsplash.com/photo-1581291518655-9523bb99a9f9?w=800&q=80"
    },
    {
      id: 3,
      title: "The Rise of AI-Driven Development",
      excerpt: "How generative AI is changing the landscape of frontend coding...",
      category: "Tech",
      date: "April 18",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    }
  ];

 const stats = [
  { label: "Articles", value: "100+", subtext: "Tech Insights" },
  { label: "Projects", value: "50+", subtext: "Live Works" },
  { label: "Experience", value: "5+", subtext: "Years Pro" },
  { label: "Clients", value: "30+", subtext: "Global Trust" }
];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "CEO, TechFlow",
      text: "Zeeshan ne hamari e-commerce site ko Next.js par migrate kiya. Speed aur SEO mein wazeh farq nazar aaya.",
      image: "https://i.pravatar.cc/150?u=ahmed"
    },
    {
      id: 2,
      name: "Sara Williams",
      role: "Product Manager",
      text: "Clean code aur professional design. Next.js aur Tailwind ki aisi mastery bohot kam dekhne ko milti hai.",
      image: "https://i.pravatar.cc/150?u=sara"
    }
  ];

  return (
    <div className="bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <img 
            src="/images/hero-bg.jpg" 
            alt="Mesh Gradient"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Available for New Projects</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-[900] text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Think Big. <br />
              <span className="text-blue-600 italic">Build Better.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
              Hum Next.js ke expert hain jo aapke simple ideas ko powerful digital products mein badalte hain.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/contact">
                <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all shadow-2xl active:scale-95">Get Started</button>
              </Link>
              <Link href="/blog">
                <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black uppercase text-xs tracking-widest hover:border-slate-900 transition-all active:scale-95">Our Work</button>
              </Link>
            </div>
          </div>

          <div className="relative lg:block hidden h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/40 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute top-10 right-0 w-[85%] h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white z-10 rotate-3 hover:rotate-0 transition-all duration-500">
              <img src="/images/hero-right.jpg" alt="Project Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-20 left-0 w-64 bg-slate-900 p-6 rounded-[30px] shadow-2xl z-20 -rotate-6 hover:rotate-0 transition-all duration-500 border border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <p className="text-white text-xs font-black uppercase tracking-widest">Verified</p>
                  <p className="text-slate-400 text-[10px]">Quality Standard</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic">"Building products that actually solve real-world problems."</p>
            </div>
            <div className="absolute top-0 left-20 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 animate-bounce transition-all">
              <span className="text-blue-600 font-black text-sm">Next.js 15+</span>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1: HERO  End*/}
      <section className="pt-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">         
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {stats.map((stat, index) => (
               <div  key={index} className="isotope-item ">
                  <div className="post-11708 services type-services status-publish has-post-thumbnail hentry">
                      <div className="service-item-current-style4">
                          <div className="service-inner-box">
                              <div className="icon-box">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="30">
                                      <path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                                    </svg>
                                  </div>
                                <p className=" font-black  service-inner-item">
                                  {stat.value}</p>

                              </div>
                              <p className="title service-title">
                                {stat.label}
                                      <br></br>{stat.subtext} 
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
             
            ))}
          </div>
          {/* Testimonials */}
         
        </div>
      </section>
      {/* SECTION: ABOUT ME */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* LEFT SIDE: Image  */}
                <div className="relative group">
                  <div className="relative h-[550px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                    <img 
                      src="/images/about-us.jpg" 
                      alt="Journalism and Technology" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -bottom-10 -right-6 md:right-10 bg-white p-8 rounded-[30px] shadow-2xl border border-slate-100 max-w-[280px]">
                    <h3 className="text-5xl font-[950] text-blue-600 tracking-tighter mb-1">5+</h3>
                    <p className="text-slate-900 font-black text-[10px] uppercase tracking-widest mb-4 text-nowrap">Years of Digital Excellence</p>
                    <div className="flex gap-6 pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xl font-bold text-slate-900">100+</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Daily Articles</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-slate-900">50k+</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Monthly Readers</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RIGHT SIDE: Professional */}
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">Our Mission</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-5xl font-[950] text-slate-900 leading-[0.9] tracking-tighter mb-8">
                    We don't just report news, 
                    we design <span className="text-blue-600 italic">perspectives.</span>
                  </h2>

                  <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
                    <p className='mb-2'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                    </p>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      "Real-time Data Fetching",
                      "Edge-Optimized Performance",
                      "SEO-First Architecture",
                      "Premium UI Experience"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center group-hover/item:scale-110 transition">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-slate-200">
                    Explore Portfolio
                  </button>
          </div>

        </div>
      </section>

      {/* SECTION: BENTO SHOWCASE */}
      <section className="relative min-h-screen bg-white flex items-center overflow-hidden py-15">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '45px 45px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Next-Gen Development</span>
            </div>
            <h1 className="text-6xl md:text-6xl font-[950] text-slate-900 tracking-tighter leading-[0.85] mb-10">WE BUILD <span className="text-blue-600 italic">DIGITAL</span> <br /> PRODUCTS.</h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-lg mb-6 leading-relaxed font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              .</p>
               <p className="text-slate-500 text-lg md:text-xl max-w-lg  leading-relaxed font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              .</p>
          </div>
          <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[650px]">
            <div className="col-span-8 row-span-8 bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden shadow-2xl relative group">
              <img src="/images/products.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-4 row-span-5 bg-blue-600 rounded-[30px] p-8 flex flex-col justify-end shadow-xl shadow-blue-600/20">
              <p className="text-5xl font-black text-white tracking-tighter">10k+</p>
              <p className="text-[10px] font-bold text-blue-100 uppercase mt-2 tracking-[0.2em]">Users Reached</p>
            </div>
            <div className="col-span-4 row-span-7 bg-white rounded-[30px] border border-slate-100 p-6 flex flex-col justify-center items-center shadow-xl">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4"><span className="text-blue-600 text-xl font-bold">⚡</span></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fast Speed</p>
            </div>
            <div className="col-span-8 row-span-4 bg-slate-900 rounded-[30px] p-1 overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-slate-800/50 rounded-[25px] flex items-center px-8">
                <p className="text-blue-400 font-mono text-xs"><span className="text-indigo-400">status:</span> "Ready to scale"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RECENT STORIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
             <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Latest</span>
            </div>
            <h1 className="text-6xl md:text-6xl font-[950] text-slate-900 tracking-tighter leading-[0.85] mb-0">OUR
              <span className="text-blue-600 italic"> BLOG</span></h1>
          </div>
        </div>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer">
                <article className='blog-box'>
                  <div className="relative h-72 rounded-[40px] overflow-hidden mb-6 shadow-xl shadow-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                      {post.category}
                    </div>
                  </div>

                  <div className=" blog_detail px-4 mb-6">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">{post.date}</p>
                      
                      <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                  </div>
                  <button className="flex items-center gap-3 font-semibold text-black group text-lg article_view">
                    Read Article
                    <span className="group-hover:translate-x-2 transition-transform text-xl">
                      →
                    </span>
                  </button>
                </article>
              </Link>
            ))}
          </div>
      </section>

      {/* SECTION: NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-[50px] py-16 px-6 lg:px-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4 tracking-tight">Become a better developer.</h3>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">Har hafte coding tricks aur tech news direct apne inbox mein payein.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="email@example.com" className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-blue-500 transition text-sm" />
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition">Join Now</button>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
}