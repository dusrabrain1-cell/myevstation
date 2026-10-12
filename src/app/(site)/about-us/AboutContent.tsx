import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, ShieldCheck, MapPin, Zap, Gauge, Leaf, CheckCircle2, CarFront, Bike, Building2, Calculator, IndianRupee, RadioTower, PlugZap, Users, Flag } from "lucide-react";

export default function AboutContent() {
  return (
    <>
            <section id="leadership" className="relative overflow-hidden bg-white py-16 sm:py-20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e87522] via-white to-[#16834a]" />
              <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#c65f19]">Built on service. Focused on the future.</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-[#092d20] sm:text-5xl">Leadership that understands mission-critical systems</h2>
                  <p className="mt-4 text-base leading-7 text-[#536258] sm:text-lg">MyEVStation brings an ex-Indian Air Force perspective to EV charging infrastructure—where operational discipline, dependable electronics, safety and customer trust matter.</p>
                </div>
                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  <article className="overflow-hidden rounded-3xl border border-[#e1e9e2] bg-[#f7faf7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8efe9]">
                      <Image src="/raj-kishore-prasad.png" alt="HFL Raj Kishore Prasad at an EV charging station" width={900} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-contain object-center scale-[1.04]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/65 via-transparent to-transparent"/>
                      <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0b5a42]">Founder · Veteran leadership</span>
                    </div>
                    <div className="p-7 sm:p-9">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0b5a42] text-white"><ShieldCheck size={25}/></div>
                        <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#c65f19]">Founder</p><h3 className="mt-1 text-2xl font-black text-[#092d20]">HFL Raj Kishore Prasad</h3><p className="mt-1 text-sm font-semibold leading-6 text-[#526157]">Former Indian Air Force · Honorary Flight Lieutenant</p></div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-[#45554a]">Brings 37 years of Indian Air Force service and technical leadership, including oversight related to C-17, C-130J, IL-76 and IL-78 aircraft systems. His background includes senior electronics examination responsibilities and advanced electrical/avionics training.</p>
                      <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Aviation electronics</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Avionics & reliability</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Technical team leadership</span></div>
                    </div>
                  </article>
                  <article className="overflow-hidden rounded-3xl border border-[#e1e9e2] bg-[#f7faf7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8efe9]">
                      <Image src="/manoj-sharma.png" alt="HFO Manoj Sharma, co-founder of MyEVStation" width={900} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-contain object-center scale-[1.04]" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/65 via-transparent to-transparent"/>
                      <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0b5a42]">Founder · Veteran leadership</span>
                    </div>
                    <div className="p-7 sm:p-9">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e87522] text-white"><Zap size={25}/></div>
                        <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#c65f19]">Founder</p><h3 className="mt-1 text-2xl font-black text-[#092d20]">HFO Manoj Sharma</h3><p className="mt-1 text-sm font-semibold text-[#526157]">Former Indian Air Force</p></div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-[#45554a]">Brings an ex-service perspective to the MyEVStation mission. Together, the leadership team aims to translate service values—discipline, accountability, teamwork and a safety-first mindset—into a customer-focused EV charging business opportunity.</p>
                      <p className="mt-4 text-xs leading-5 text-[#778278]">Detailed service appointments and technical qualifications for HFO Manoj Sharma will be added once confirmed.</p>
                    </div>
                  </article>
                </div>
                <div className="mt-8 rounded-3xl bg-[#092d20] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
                  <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffc18f]">An opportunity after service—and for every entrepreneur</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">Own the opportunity. Help build India’s EV charging network.</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">Have land, or no land? We’ll help you understand the model, site requirements, technology and next steps before you make a decision.</p></div>
                  <a href="https://wa.me/919625670132?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 text-sm font-extrabold text-white sm:mt-0">Discuss Your EV Station <ArrowRight size={17}/></a>
                </div>
              </div>
            </section>
      
            <SeoFaq eyebrow="EV charging questions" title="EV charging station business: FAQs" items={[
              { question: "How do I start an EV charging station business in India?", answer: "Start by identifying your customer and site type, confirming property permission, checking electrical load and connection feasibility, mapping existing chargers, and obtaining an itemised proposal for equipment, installation, software, electricity, maintenance and approvals. Choose a model only after these checks." },
              { question: "Can I start an EV charging station without owning land?", answer: "Potentially. A site-partner or host-property model may work if the property owner gives written permission and the site has suitable parking, access, power and demand. The exact commercial terms must be agreed with the host and operator before investment." },
              { question: "How much does an EV charging station cost?", answer: "Cost depends on charger type and quantity, electrical load, cable distance, civil work, connection upgrades, metering, software, payment fees, maintenance and local requirements. A charger hardware price alone is not the total installed cost; request a site-specific written quotation." },
              { question: "How much can an EV charging station earn per month?", answer: "Revenue depends on actual charging sessions, energy sold, tariff, electricity cost, utilisation, payment or network fees, rent, maintenance and financing. Calculator results are estimates, not guaranteed earnings. Use conservative utilisation assumptions and include all operating costs." },
              { question: "Which charger is right for electric cars, scooters and e-rickshaws?", answer: "There is no single charger for every vehicle. Confirm connector and vehicle compatibility first. AC charging often suits cars parked for longer periods, while DC fast charging may suit high-turnover sites with sufficient electrical capacity. Two-wheelers and three-wheelers need compatible equipment and connectors." },
              { question: "Will MyEVStation help me get permission to install an EV charging station?", answer: "Yes. MyEVStation will guide you through the permission process for your proposed site. We can help identify whose consent may be needed, explain the documents and site details to prepare, and coordinate next steps with the property owner, RWA or facility manager and relevant electricity provider or authority where applicable. Requirements vary by location and project, and final approval rests with the competent authority or property decision-maker." },
              { question: "Does MyEVStation guarantee a return on investment or a fixed payback period?", answer: "No. Any payback estimate depends on assumptions and actual demand. Ask for a written model that separates hardware, installation, electricity, rent, network fees, taxes, maintenance, downtime and financing, and test conservative and downside scenarios." },
              { question: "Is MyEVStation officially endorsed by the Indian Air Force or the Government of India?", answer: "MyEVStation is an independent venture. Its founders' prior service and experience are background credentials only and do not imply official Indian Air Force or Government of India endorsement, approval or certification." },
              { question: "What if I do not know which permissions or documents are required?", answer: "You do not need to figure it out alone. Share your location, site type, whether you own or lease the property, and whether it is a society, commercial site or private parking. MyEVStation will help you understand the likely permission steps and document checklist, then guide you toward the relevant property representative, DISCOM or local authority. The exact checklist depends on the site." }
            ]} />
      
      
    </>
  );
}
