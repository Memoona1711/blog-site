import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* SECTION 1: HEADER & INTRO */}
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -mr-40 -mt-40"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Identity</span>
          <h1 className="text-4xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
           Think Big.<br /> something <span className="italic text-blue-500">Build Better.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
      </section>
      {/* SECTION 2: THE VISION & MISSION (2-COLUMN GRID) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="w-full h-[500px] bg-slate-200 rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="/images/about-us.jpg" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-10 rounded-[40px] shadow-2xl">
              <p className="text-4xl font-black italic">Quality</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-2">Over Quantity</p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-[950] text-slate-900 tracking-tighter leading-[0.85] mb-0">Our<span className="text-blue-600 italic"> Mission</span></h1>
=            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Innovation First", desc: "Naye trends ko apnana hamari fitrat hai." },
                { title: "Open Learning", desc: "Har developer ke liye muft aur aala miyar ka mawad." },
                { title: "Global Standards", desc: "International coding standards par amal." }
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE EXPERTISE (SKILLS) */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-[950] text-slate-900 tracking-tighter leading-[0.85] text-white mb-4">
              Our Technical
              <span className="text-blue-600 italic"> Stack</span></h1>
              <p className="text-slate-400" text-white>ILorem Ipsum is simply dummy text.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Next.js 15', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Framer Motion', 'API Design', 'UI/UX'].map((skill) => (
              <div key={skill} className="bg-white/5 border border-white/10 p-8 rounded-[30px] text-center hover:bg-blue-600 transition group cursor-default">
                <span className="text-white font-bold group-hover:scale-110 block transition">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE VALUES (CARDS) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-[950] text-slate-900 tracking-tighter leading-[0.85]  mb-0">
            Why Work <span className="text-blue-600 italic"> With Us?</span>
          </h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 category_box">
              <div className="tab-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30'>
                  <path fill='white' d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black uppercase">Fast Delivery</h3>
            <p className="text-slate-500 text-sm">Lorem Ipsum is simply dummy text.</p>
          </div>
          <div className="space-y-4 category_box">
              <div className="tab-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30'>
                  <path fill='white' d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
                </svg>
              </div>            <h3 className="text-xl text-black uppercase">Clean Code</h3>
            <p className="text-slate-500 text-sm">Lorem Ipsum is simply dummy text..</p>
          </div>
          <div className="space-y-4 category_box">
              <div className="tab-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30'>
                  <path fill='white' d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
                </svg>
              </div>            <h3 className="text-xl text-black uppercase">Dedicated Support</h3>
            <p className="text-slate-500 text-sm">Lorem Ipsum is simply dummy text.</p>
          </div>
        </div>
      </section>
    </div>
  );
}