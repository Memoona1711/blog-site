import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../components/blog-data';
export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION (Same as before) */}
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Knowledge Hub</span>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Our <span className="italic text-blue-500">Archive.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
      </section>
      {/* BLOG GRID SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer block">
              <article className='blog-box'>
                {/* Image Container */}
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

                {/* Text Content */}
                <div className=" blog_detail px-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>5 Min Read</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
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

        {/* Pagination Section (Same as before) */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex justify-center gap-4">
          <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center font-bold text-sm hover:bg-black hover:text-white transition">1</button>
          <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center font-bold text-sm hover:bg-blue-600 hover:text-white transition">Next</button>
        </div>
      </section>
    </div>
  );
}