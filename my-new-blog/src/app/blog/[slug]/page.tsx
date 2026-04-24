import { blogPosts } from '../../../components/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
// -----------------------------

export default async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return notFound();


  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="h-full bg-blue-600 w-1/3"></div>
      </div>

      {/* 2. HERO SECTION */}
      <header className="pt-32 pb-16 bg-slate-50 border-b border-slate-100 blog_bg_banenr">
        <div className="max-w-4xl mx-auto px-6 zinde_1">
          <Link href="/blog" className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-8 block hover:gap-3 transition-all">
            ← Back to Archive
          </Link>
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] text-white uppercase tracking-widest mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="text-5xl lg:text-7xl text-white text-slate-900 leading-[0.95] tracking-tighter mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold italic">Z</div>
              <p className="text-sm text-white text-slate-900 uppercase tracking-tighter">Zeeshan Ali</p>
            </div>
            <div className="h-4 w-[1px] bg-slate-300"></div>
            <p className="text-sm text-slate-400 font-medium">{post.date} • 6 Min Read</p>
          </div>
        </div>
      </header>

      {/* 3. FEATURED IMAGE */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 4. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-6 mt-20 grid lg:grid-cols-12 gap-16">
        
        {/* LEFT: Social Share (Sticky) */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            {['FB', 'TW', 'LI'].map(s => (
              <div key={s} className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-[10px]  cursor-pointer bg-blue-600 text-white transition">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE: Article Body */}
        <div className="lg:col-span-7">
          <article className="prose prose-slate prose-lg lg:prose-xl max-w-none bg-white border border-slate-100 p-5 rounded-[40px] shadow-2xl">
            <p className="text-2xl text-slate-500 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-600 pl-8">
              {post.excerpt}
            </p>
            
            {/* Yahan aapka asli content aayega */}
            <div className="text-slate-700 leading-[1.8] space-y-8">
               <h3 className="text-3xl font-black text-slate-900 tracking-tight">Introduction</h3>
               <p>{post.content}</p>
               
               <div className="bg-slate-900 text-white p-12 rounded-[40px] my-12">
                 <h4 className="text-blue-400 font-black uppercase text-xs tracking-widest mb-4">Pro Tip</h4>
                 <p className="text-xl leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.!</p>
               </div>

               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.!.</p>
            </div>
          </article>

          {/* Tags */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex gap-3">
            {['React', 'NextJS', 'WebDev'].map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-4 py-2 rounded-lg">#{tag}</span>
            ))}
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="lg:col-span-4 space-y-12 bg-white border border-slate-100 p-5 rounded-[40px] shadow-2xl">
          <div className="bg-blue-600 p-10 rounded-[40px] text-white">
            <h4 className="text-2xl font-black mb-4 tracking-tighter">Newsletter</h4>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <input type="email" placeholder="Your Email" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder:text-blue-200 outline-none mb-4" />
            <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black uppercase text-xs tracking-widest">Join Now</button>
          </div>

          <div className="border border-slate-100 p-5 rounded-[40px]">
            <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-8">Related Reads</h4>
            <div className="space-y-8">
              {blogPosts.slice(0, 3).map(p => (
                <Link href={`/blog/${p.slug}`} key={p.id} className="group flex gap-4 items-center recent_blog_info">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 leading-tight transition">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}