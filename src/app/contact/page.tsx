"use client"
import React, { useState } from 'react';
import { handleContactForm } from './actions';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const result = await handleContactForm(formData);
    
    if (result.success) {
      setIsSubmitting(false);
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 5000);
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1: HEADER */}
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Let’s build <br /> something <span className="italic text-blue-500">great.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT CARDS & FORM */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-2xl">
                            <h3 className="text-3xl font-black text-blue-600  mb-6 tracking-tighter">Contact Details</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">abc@gmail.com</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Office</p>
                  <p className="text-lg font-bold text-slate-900">Lorem Ipsum is simply dummy text </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Work Hours</p>
                  <p className="text-lg font-bold text-slate-900">Mon - Fri, 9am - 6pm</p>
                </div>
              </div>
              
              <div className="mt-12 pt-10 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {['LI', 'TW', 'GH', 'IG'].map((social) => (
                    <div key={social} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-black bg-blue-600 text-white transition cursor-pointer">
                      {social}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-2 ">
            <div className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-2xl">
              <h3 className="text-3xl font-black text-blue-600 mb-10 tracking-tighter">Send a Message</h3>
              
              {/* Form updated with Action */}
              <form action={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input name="name" required type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl p-5 outline-none focus:ring-2 ring-blue-500/20 transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-2xl p-5 outline-none focus:ring-2 ring-blue-500/20 transition" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                  <input name="subject" required type="text" placeholder="Project Inquiry" className="w-full bg-slate-50 border-none rounded-2xl p-5 outline-none focus:ring-2 ring-blue-500/20 transition" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your project..." className="w-full bg-slate-50 border-none rounded-2xl p-5 outline-none focus:ring-2 ring-blue-500/20 transition"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button 
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-black'} text-white py-5 rounded-[20px] font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1`}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Inquiry Now'}
                  </button>
                </div>
              </form>

              {/* Success Feedback */}
              {messageSent && (
                <div className="mt-8 p-5 bg-green-50 text-green-700 rounded-2xl text-center font-bold text-sm">
                  Shukriya! Aapka message hamein mil gaya hai. 🚀
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
      {/* SECTION 3: QUICK FAQ */}
      <section className="py-24 bg-slate-50 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Lorem Ipsum is simply dummy text ?</h4>
              <p className="text-sm text-slate-500">HLorem Ipsum is simply dummy text </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Lorem Ipsum is simply dummy text ?</h4>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}