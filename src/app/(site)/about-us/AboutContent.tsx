import Image from "next/image";
import Link from "next/link";
import SeoFaq from "@/components/custom/SeoFaq";
import { ArrowRight, ShieldCheck, Zap, Calculator } from "lucide-react";

export default function AboutContent() {
  return (
    <>
            <section id="leadership" className="relative overflow-hidden bg-white py-16 sm:py-20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e87522] via-white to-[#16834a]" />
              <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#c65f19]">Built on service. Focused on the future.</p>
                  <h1 className="mt-3 text-3xl font-black tracking-tight text-[#092d20] sm:text-5xl">Leadership that understands mission-critical systems</h1>
                  <p className="mt-4 text-base leading-7 text-[#536258] sm:text-lg">MyEVStation brings an ex-Indian Air Force perspective to EV charging infrastructure—where operational discipline, dependable electronics, safety and customer trust matter.</p>
                </div>
                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  <article className="overflow-hidden rounded-3xl border border-[#e1e9e2] bg-[#f7faf7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8efe9]">
                      <Image src="/raj-kishore-prasad.png" alt="HFL Raj Kishore Prasad at an EV charging station" width={900} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/65 via-transparent to-transparent"/>
                      <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0b5a42]">Co-Founder &amp; CEO · Veteran leadership</span>
                    </div>
                    <div className="p-7 sm:p-9">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0b5a42] text-white"><ShieldCheck size={25}/></div>
                        <div><h3 className="mt-1 text-2xl font-black text-[#092d20]">HFL Raj Kishore Prasad (Retd.)</h3></div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-[#45554a]">Brings 37 years of Indian Air Force experience, with expertise in AN-12, Avro (HS-748) and Embraer-135/145 (Legacy) aircraft systems. Recognised with the Chief of the Air Staff Commendation and USTAD National Award, with advanced technical training in Brazil.</p>
                      <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Aviation electronics</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Avionics & reliability</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Technical team leadership</span></div>
                    </div>
                  </article>
                  <article className="overflow-hidden rounded-3xl border border-[#e1e9e2] bg-[#f7faf7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8efe9]">
                      <Image src="/manoj-sharma.png" alt="HFO Manoj Kumar Sharma, co-founder of MyEVStation" width={900} height={1200} sizes="(max-width: 768px) 100vw, 50vw" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/65 via-transparent to-transparent"/>
                      <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#0b5a42]">Co-Founder &amp; COO · Veteran leadership</span>
                    </div>
                    <div className="p-7 sm:p-9">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e87522] text-white"><Zap size={25}/></div>
                        <div><h3 className="mt-1 text-2xl font-black text-[#092d20]">HFO Manoj Kumar Sharma (Retd.)</h3></div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-[#45554a]">Brings 39 years of Indian Air Force service, with expertise in aircraft maintenance, logistics management, technical audits and team leadership, including experience with AN-12, AN-32 and Embraer BBJ/AWACS aircraft.</p>
                      <div className="mt-5 flex flex-wrap items-center gap-2"><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Aircraft maintenance</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Logistics management</span><span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#24543b] ring-1 ring-[#dbe6dc]">Technical audits &amp; team leadership</span></div>
                    </div>
                  </article>
                </div>
                <section id="partners" aria-labelledby="partners-heading" className="relative mt-16 overflow-hidden rounded-[2rem] border border-[#dce9df] bg-gradient-to-br from-[#f6faf7] via-white to-[#eef7f0] px-5 py-12 sm:mt-20 sm:px-10 sm:py-16">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#16834a]/10 blur-3xl" />
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#e87522]/10 blur-3xl" />
                  <div className="relative mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe2d3] bg-white/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-[#0b5a42]"><span className="h-2 w-2 rounded-full bg-[#e87522]" /> Our growing network</span>
                    <h2 id="partners-heading" className="mt-5 text-3xl font-black tracking-tight text-[#092d20] sm:text-5xl">Our Partners</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#536258] sm:text-lg">Meet the business leaders helping MyEVStation expand EV charging station opportunities, build regional partnerships and support electric vehicle charging infrastructure across India.</p>
                  </div>
                  <div className="relative mx-auto mt-10 grid max-w-5xl gap-6">
                    <article itemScope itemType="https://schema.org/Person" className="group overflow-hidden rounded-[1.75rem] border border-[#dce7df] bg-white shadow-[0_18px_55px_-28px_rgba(9,45,32,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_-28px_rgba(9,45,32,0.38)]">
                      <div className="grid md:grid-cols-[0.82fr_1.18fr]">
                        <div className="relative min-h-[300px] overflow-hidden bg-[#e8efe9] sm:min-h-[390px]">
                          <Image src="/images/abhinav-sekhri.jpg" alt="Abhinav Sekhri, Senior Partner – Punjab at MyEVStation" width={960} height={1200} sizes="(max-width: 768px) 100vw, 40vw" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]" loading="lazy" itemProp="image" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#092d20]/70 via-transparent to-transparent" />
                          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[.13em] text-[#0b5a42] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#e87522]" /> Punjab, India</div>
                          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/75">Regional leadership</p>
                            <p className="mt-1 text-xl font-extrabold text-white">Growing EV infrastructure in Punjab</p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center p-7 sm:p-10">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-[#e8f4eb] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.1em] text-[#0b5a42]">Senior Partner</span>
                            <span className="rounded-full bg-[#fff1e7] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.1em] text-[#a84d13]">Punjab</span>
                          </div>
                          <h3 itemProp="name" className="mt-5 text-3xl font-black tracking-tight text-[#092d20] sm:text-4xl">Abhinav Sekhri</h3>
                          <p itemProp="jobTitle" className="mt-2 text-sm font-bold text-[#c65f19]">Senior Partner – Punjab, MyEVStation</p>
                          <p itemProp="description" className="mt-5 text-sm leading-7 text-[#45554a] sm:text-base">Brings extensive experience in the Merchant Navy, entrepreneurship, investment, real estate, textile manufacturing, travel, and climate-tech. Combines operational expertise with strategic leadership, business development, and cross-sector business management to drive growth, build partnerships, and create new business opportunities.</p>
                          <div className="mt-6 flex flex-wrap gap-2" aria-label="Areas of experience">
                            <span className="rounded-lg border border-[#dce7df] bg-[#f7faf7] px-3 py-2 text-xs font-bold text-[#24543b]">Merchant Navy</span>
                            <span className="rounded-lg border border-[#dce7df] bg-[#f7faf7] px-3 py-2 text-xs font-bold text-[#24543b]">Entrepreneurship &amp; Investment</span>
                            <span className="rounded-lg border border-[#dce7df] bg-[#f7faf7] px-3 py-2 text-xs font-bold text-[#24543b]">Strategic Partnerships</span>
                            <span className="rounded-lg border border-[#dce7df] bg-[#f7faf7] px-3 py-2 text-xs font-bold text-[#24543b]">Climate-Tech</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <p className="relative mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-[#657469]">We’re building a wider network of regional partners to help bring suitable EV charging solutions to more locations.</p>
                </section>
                <div className="mt-8 rounded-3xl bg-[#092d20] p-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
                  <div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffc18f]">An opportunity after service—and for every entrepreneur</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">Own the opportunity. Help build India’s EV charging network.</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">Have land, or no land? We’ll help you understand the model, site requirements, technology and next steps before you make a decision.</p></div>
                  <a href="https://wa.me/919876260822?text=Hello%20MyEVStation%2C%20I%20would%20like%20to%20enquire%20about%20EV%20charging%20station%20opportunities." className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#e87522] px-6 py-4 text-sm font-extrabold text-white sm:mt-0">Discuss Your EV Station <ArrowRight size={17}/></a>
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
