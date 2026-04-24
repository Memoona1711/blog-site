import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 navigatio_area">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
          DEV<span className="text-blue-600">.</span>INSIGHTS
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold tracking-widest text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition">HOME</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">BLOGS</Link>
          <Link href="/about" className="hover:text-blue-600 transition">ABOUT</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">CONTACT</Link>
        </div>

       <Link href="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black transition shadow-lg shadow-blue-200">
                Hire Me
            </button>
        </Link>
      </div>
    </nav>
  );
}