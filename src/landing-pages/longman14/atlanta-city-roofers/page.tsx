import React from 'react';
import { ArrowRight, BadgeCheck, ClipboardCheck, Clock3, House, Home, MapPin, Phone, ShieldCheck, Wrench } from 'lucide-react';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import ServiceForm from './components/ServiceForm';
import HeroVisuals from './components/HeroVisuals';


export const meta = {
  slug: "atlanta-city-roofers",
  title: "Atlanta City Roofing | Professional Roofing Services in Atlanta",
  author: { name: "Techilola", github: "Longman14" },
  tags: ["local-business", "services", "roofing", "conversion"],
  description:
    "A landing page for Atlanta City Roofing, providing professional roofing services and quality craftsmanship in Atlanta, GA.",
}  


const AtlantaCityRoofersPage = () => {
  return (
    <div id="top" className="porter-page relative min-h-screen overflow-y-clip overflow-x-clip bg-[#e8f7db] font-sans text-[#1a3d1c] selection:bg-[#7cc129] selection:text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-linear-to-br from-[#f2fbec] to-[#d6f0c2] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-linear-to-tl from-[#c3ebb0] to-[#e8f7db] blur-3xl opacity-60 pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col gap-8">
          <HeroContent />
          <a href="#locations" className="inline-flex w-fit items-center gap-2 rounded-xl bg-green-800 px-6 py-3.5 font-bold text-white! shadow-lg shadow-[#1a3d1c]/10 transition hover:-translate-y-0.5 hover:bg-[#32612D]">
            Schedule a roof check <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Column - Visuals & Floating Cards */}
        <HeroVisuals />
      </main>

      <section className="relative z-10 border-y border-[#1a3d1c]/10 bg-white/45 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Built for Atlanta weather', text: 'We help protect your home through heat, heavy rain, wind, and the seasons in between.' },
            { icon: BadgeCheck, title: 'Straightforward recommendations', text: 'You get a clear look at what your roof needs, without pressure to replace what can be repaired.' },
            { icon: Clock3, title: 'Responsive local service', text: 'A local team that keeps communication simple from the first call through the finished work.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8f7db] text-[#32612D]"><Icon size={21} /></div>
              <div>
                <h2 className="text-base font-bold text-[#1a3d1c]">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-[#1a3d1c]/65">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7cc129]">Roof care, made clear</p>
          <h2 className="text-4xl font-extrabold leading-tight text-[#1a3d1c] md:text-5xl">The right fix starts with a closer look.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#1a3d1c]/70">Whether you are seeing a leak or planning ahead, Atlanta City Roofing can help you understand the condition of your roof and choose the next step with confidence.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Wrench, title: 'Roof repairs', text: 'Address leaks, storm damage, worn flashing, and the small issues that become expensive when ignored.' },
            { icon: House, title: 'Roof replacement', text: 'When a roof has reached the end of its life, get a durable replacement planned around your home.' },
            { icon: ClipboardCheck, title: 'Roof inspections', text: 'Get an honest starting point before buying, selling, renovating, or making a bigger decision.' },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-[#1a3d1c]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#32612D]/10">
              <Icon size={25} className="text-[#7cc129]" />
              <h3 className="mt-7 text-xl font-bold text-[#1a3d1c]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#1a3d1c]/65">{text}</p>
              <a href="#locations" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#32612D]">Learn what to expect <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#32612D] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#c1ea98]">A better roofing experience</p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">No guesswork. No runaround. Just a solid plan.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/75">From the first conversation to the final walkthrough, we keep the work organized and your home treated with care.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Clear scope before work begins',
              'Respectful crews and clean job sites',
              'Quality materials selected for the job',
              'Updates you can actually understand',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border-t border-white/20 pt-4 text-sm font-semibold">
                <BadgeCheck size={19} className="mt-0.5 shrink-0 text-[#c1ea98]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7cc129]">Work worth looking up to</p>
            <h2 className="text-4xl font-extrabold leading-tight text-[#1a3d1c] md:text-5xl">A roof should look good from every angle.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#1a3d1c]/65">Representative project imagery while our local portfolio is being assembled.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          {[
            { title: 'Complete replacement', location: 'Atlanta, GA', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85', className: 'md:col-span-7 md:row-span-2' },
            { title: 'Storm-ready repair', location: 'Decatur, GA', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85', className: 'md:col-span-5' },
            { title: 'Clean finishing work', location: 'Sandy Springs, GA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9ux-GHKLXkAZR0ZmjUMsNAudC_pLyBMryBwvJUQ2Rg&s=10', className: 'md:col-span-5' },
          ].map(({ title, location, image, className }) => (
            <div key={title} className={`group relative min-h-57.5 overflow-hidden rounded-3xl bg-[#32612D] ${className}`}>
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a3d1c]/85 via-[#1a3d1c]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-1 text-sm text-white/75">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="support" className="relative z-10 border-y border-[#1a3d1c]/10 bg-white/50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7cc129]">Before we get started</p>
            <h2 className="text-4xl font-extrabold leading-tight text-[#1a3d1c] md:text-5xl">Good questions make better roof decisions.</h2>
          </div>
          <div className="divide-y divide-[#1a3d1c]/15">
            {[
              { question: 'How do I know if I need a repair or a replacement?', answer: 'An inspection is the best first step. We look at the age, condition, and specific damage to help you understand the practical options for your home.' },
              { question: 'How much does a roof project cost?', answer: 'The price depends on the roof size, materials, access, and scope of work. After we understand the project, we can provide a clear estimate for your situation.' },
              { question: 'Do you help with storm damage?', answer: 'Yes. We can assess visible storm damage and explain what should happen next, whether the roof needs an immediate repair or a more complete solution.' },
              { question: 'What happens after I request an estimate?', answer: 'A team member will follow up to learn more about your home and arrange the right next step, usually an inspection or conversation about the work.' },
            ].map(({ question, answer }) => (
              <details key={question} className="group py-5 first:pt-0 last:pb-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-[#1a3d1c] marker:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e8f7db] text-xl font-normal text-[#32612D] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pr-14 pt-3 text-sm leading-6 text-[#1a3d1c]/65">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7cc129]">Start with the roof</p>
          <h2 className="text-4xl font-extrabold leading-tight text-[#1a3d1c] md:text-5xl">Let’s figure out what your home needs.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#1a3d1c]/70">Tell us a little about the project and an Atlanta City Roofing team member will help you take the next step.</p>
          <div className="mt-8 flex items-start gap-3 text-sm text-[#1a3d1c]/70">
            <MapPin size={18} className="mt-0.5 shrink-0 text-[#7cc129]" />
            <span>Serving homeowners across Atlanta, GA and nearby communities.</span>
          </div>
        </div>
        <ServiceForm />
      </section>

      <footer className="relative z-10 bg-[#1a3d1c] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3 text-lg font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#7cc129] text-white"><Home size={21} /></span>
              Atlanta City Roofing
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">Thoughtful roofing work for Atlanta homeowners who want a clear plan and a well-protected home.</p>
            <a href="tel:4702987576" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#c1ea98] hover:text-white">
              <Phone size={16} /> (470) 298-7576
            </a>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#c1ea98]">Explore</h2>
            <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-white/70">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#reviews" className="hover:text-white">Past jobs</a>
              <a href="#support" className="hover:text-white">FAQ</a>
              <a href="#locations" className="hover:text-white">Request an estimate</a>
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#c1ea98]">Find us</h2>
            <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/70">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#7cc129]" />
              <address className="not-italic">218 Pryor St SW<br />Atlanta, GA 30303, USA</address>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Atlanta City Roofing</span>
          <span>Roofing services in Atlanta, GA</span>
        </div>
      </footer>

      {/* Required CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in-down { animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-bounce-slow { animation: bounceSlow infinite ease-in-out; }
      `}} />
    </div>
  )
}

export default AtlantaCityRoofersPage;