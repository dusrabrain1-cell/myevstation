"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BatteryCharging, Camera, CheckCircle2, Download, MapPin, Plus, Printer, Trash2, Zap } from "lucide-react";

type Charger = { id: number; power: string; name: string; qty: number; price: number; image: string; category: string };
type Photo = { name: string; url: string };

const catalogue: Omit<Charger, "id" | "qty">[] = [
  { power: "3.3 kW", name: "EV charging socket", price: 5000, category: "Socket / 2W–4W", image: "/images/2a.png" },
  { power: "3 kW", name: "Blaze DC – single gun", price: 76000, category: "DC / 2W–3W", image: "/images/3a.png" },
  { power: "6 kW", name: "Blaze DC", price: 140000, category: "DC / 2W–3W", image: "/images/3B.png" },
  { power: "12 kW", name: "Blaze DC", price: 180000, category: "DC / 2W–3W", image: "/images/3C.png" },
  { power: "7.4 kW", name: "Blaze AC", price: 25000, category: "AC / Cars", image: "/images/6A.png" },
  { power: "11 kW", name: "Blaze AC", price: 35000, category: "AC / Cars", image: "/images/6A.png" },
  { power: "22 kW", name: "Blaze AC", price: 35000, category: "AC / Cars", image: "/images/6A.png" },
  { power: "30 kW", name: "Lightning DC – single gun", price: 330000, category: "DC fast / Cars", image: "/images/7.png" },
  { power: "60 kW", name: "Lightning DC – dual gun", price: 610000, category: "DC fast / Cars", image: "/images/7.png" },
  { power: "120 kW", name: "Lightning DC – dual gun", price: 810000, category: "DC fast / Cars", image: "/images/7.png" },
  { power: "180 kW", name: "Lightning DC – dual gun", price: 1200000, category: "DC fast / Cars, buses", image: "/images/7.png" },
  { power: "240 kW", name: "Lightning DC – dual gun", price: 1400000, category: "DC fast / Cars, buses", image: "/images/7.png" },
];

const money = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
const inputClass = "mt-1 w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100";
const labelClass = "block text-sm font-semibold text-stone-700";

export default function SalesProposalPage() {
  const [step, setStep] = useState(1);
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "", site: "Residential society", address: "", city: "", salesperson: "", notes: "" });
  const [parking, setParking] = useState({ cars: "20–50", twoWheelers: "20–50", hours: "8–12 hours", power: "Not sure", permission: "Permission needed" });
  const [chargers, setChargers] = useState<Charger[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [margin, setMargin] = useState(20);
  const [tax, setTax] = useState(5);
  const [showInternal, setShowInternal] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const [proposalMode, setProposalMode] = useState<"automatic" | "custom">("automatic");

  const totalQty = chargers.reduce((s, c) => s + c.qty, 0);
  const hardwareCost = chargers.reduce((s, c) => s + c.qty * c.price, 0);
  const sellingSubtotal = Math.round(hardwareCost * (1 + margin / 100));
  const taxAmount = Math.round(sellingSubtotal * tax / 100);
  const grandTotal = sellingSubtotal + taxAmount;

  const buildAutomaticMix = () => {
    const site = customer.site.toLowerCase();
    let picks: Array<[number, number]>;
    if (site.includes("society")) picks = [[4, 2], [0, 2]];
    else if (site.includes("petrol") || site.includes("highway") || site.includes("mall") || site.includes("commercial")) picks = [[8, 1], [4, 2]];
    else if (site.includes("fleet") || site.includes("warehouse")) picks = [[7, 1], [4, 1]];
    else picks = [[4, 1], [0, 1]];
    if (parking.cars === "Under 20") picks = [[4, 1], [0, 1]];
    setChargers(picks.map(([index, qty], i) => ({ ...catalogue[index], id: Date.now() + i, qty })));
    setProposalMode("automatic");
    setPrepared(true);
  };

  const addCharger = (index: number) => {
    const product = catalogue[index];
    setChargers((prev) => {
      const existing = prev.find((c) => c.name === product.name && c.power === product.power);
      if (existing) return prev.map((c) => c.id === existing.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...product, id: Date.now() + index, qty: 1 }];
    });
  };
  const updateQty = (id: number, qty: number) => setChargers((prev) => prev.map((c) => c.id === id ? { ...c, qty: Math.max(1, qty || 1) } : c));
  const updatePrice = (id: number, price: number) => setChargers((prev) => prev.map((c) => c.id === id ? { ...c, price: Math.max(0, price || 0) } : c));
  const addPhotos = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => setPhotos((prev) => [...prev, { name: file.name, url: String(reader.result) }]);
      reader.readAsDataURL(file);
    });
  };
  const proposalNo = useMemo(() => "MES-" + new Date().toISOString().slice(0, 10).replaceAll("-", "") + "-01", []);

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="min-w-0">
            <div className="text-xl font-extrabold tracking-tight text-[#0d5c3d] sm:text-2xl">myEVStation</div>
            <div className="mt-0.5 text-[10px] font-semibold tracking-wide text-stone-600 sm:text-xs">Founded by Ex-Indian Air Force Personnel</div>
          </a>
          <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 sm:flex"><BatteryCharging size={16}/> Sales workspace</div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">Sales team · Site visit</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Create a site proposal</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">A simple guided form. Add customer details, take site photos, select chargers and print a customer-ready proposal.</p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm"><span className="text-stone-500">Proposal ID</span><div className="font-bold">{proposalNo}</div></div>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-2">
          {[["1","Customer & site"],["2","Photos & needs"],["3","Chargers & PDF"]].map(([n,title],i) => <button key={n} onClick={() => setStep(i+1)} className={"rounded-xl border p-3 text-left transition " + (step===i+1 ? "border-emerald-800 bg-emerald-900 text-white" : "border-stone-200 bg-white text-stone-600")}><span className="text-xs opacity-80">STEP {n}</span><div className="mt-1 text-xs font-bold sm:text-sm">{title}</div></button>)}
        </div>

        {step === 1 && <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold">1. Who are we visiting?</h2><p className="mt-1 text-sm text-stone-500">Fill in what you know. You can complete missing details later.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>Customer / contact name<input className={inputClass} placeholder="e.g. Raj Sharma" value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})}/></label>
            <label className={labelClass}>Phone number<input className={inputClass} inputMode="tel" placeholder="10-digit mobile number" value={customer.phone} onChange={e=>setCustomer({...customer,phone:e.target.value})}/></label>
            <label className={labelClass}>Email (optional)<input className={inputClass} type="email" placeholder="name@example.com" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})}/></label>
            <label className={labelClass}>Site type<select className={inputClass} value={customer.site} onChange={e=>setCustomer({...customer,site:e.target.value})}>{["Residential society","Commercial parking / office","Petrol pump","Highway / roadside","Hotel / mall","Fleet / warehouse","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
            <label className={labelClass}>City<input className={inputClass} placeholder="e.g. Noida" value={customer.city} onChange={e=>setCustomer({...customer,city:e.target.value})}/></label>
            <label className={labelClass}>Site address or Google Maps link<input className={inputClass} placeholder="Paste address or map link" value={customer.address} onChange={e=>setCustomer({...customer,address:e.target.value})}/></label>
            <label className={labelClass}>Your name (salesperson)<input className={inputClass} placeholder="Sales team member" value={customer.salesperson} onChange={e=>setCustomer({...customer,salesperson:e.target.value})}/></label>
            <label className={labelClass}>Site permission<select className={inputClass} value={parking.permission} onChange={e=>setParking({...parking,permission:e.target.value})}>{["Owner approved","Permission needed","Lease / franchise","Not confirmed"].map(x=><option key={x}>{x}</option>)}</select></label>
          </div>
          <div className="mt-6 flex justify-end"><button onClick={()=>setStep(2)} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#0d5c3d] px-5 py-3 font-bold text-white">Next: site needs <ArrowRight size={18}/></button></div>
        </section>}

        {step === 2 && <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold">2. Tell us about the site</h2><p className="mt-1 text-sm text-stone-500">Choose the closest answer. “Not sure” is always okay.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>Available car parking<select className={inputClass} value={parking.cars} onChange={e=>setParking({...parking,cars:e.target.value})}>{["Under 20","20–50","51–100","Over 100","Not sure"].map(x=><option key={x}>{x}</option>)}</select></label>
            <label className={labelClass}>Two-wheeler parking<select className={inputClass} value={parking.twoWheelers} onChange={e=>setParking({...parking,twoWheelers:e.target.value})}>{["None","Under 20","20–50","51–100","Over 100","Not sure"].map(x=><option key={x}>{x}</option>)}</select></label>
            <label className={labelClass}>How long is parking used each day?<select className={inputClass} value={parking.hours} onChange={e=>setParking({...parking,hours:e.target.value})}>{["Under 4 hours","4–8 hours","8–12 hours","12–24 hours","Not sure"].map(x=><option key={x}>{x}</option>)}</select></label>
            <label className={labelClass}>Electricity available at site?<select className={inputClass} value={parking.power} onChange={e=>setParking({...parking,power:e.target.value})}>{["Yes, confirmed","Need electrician to check","Not sure","No connection yet"].map(x=><option key={x}>{x}</option>)}</select></label>
          </div>
          <label className={"mt-5 "+labelClass}>Notes for the technical team<textarea className={inputClass} rows={3} placeholder="Any issue, customer request or detail to remember..." value={customer.notes} onChange={e=>setCustomer({...customer,notes:e.target.value})}/></label>
          <div className="mt-6 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 p-5">
            <div className="flex items-center gap-3"><div className="rounded-xl bg-emerald-100 p-3 text-emerald-900"><Camera size={22}/></div><div><h3 className="font-bold">Add photos from your phone</h3><p className="text-sm text-stone-500">Parking, entrance, electrical panel and proposed charger spot.</p></div></div>
            <label className="mt-4 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm font-bold"><Plus size={18}/> Take or upload photos<input className="sr-only" type="file" accept="image/*" capture="environment" multiple onChange={e=>addPhotos(e.target.files)}/></label>
            {photos.length>0 && <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{photos.map((p,i)=><div key={p.name+i} className="relative overflow-hidden rounded-xl border bg-white"><img src={p.url} alt={p.name} className="h-28 w-full object-cover"/><p className="truncate p-2 text-xs">{p.name}</p><button aria-label="Remove photo" onClick={()=>setPhotos(prev=>prev.filter((_,j)=>i!==j))} className="absolute right-2 top-2 rounded-full bg-white p-1"><Trash2 size={14}/></button></div>)}</div>}
          </div>
          <div className="mt-6 flex justify-between gap-3"><button onClick={()=>setStep(1)} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-stone-300 px-4 py-3 font-bold"><ArrowLeft size={18}/> Back</button><button onClick={()=>setStep(3)} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#0d5c3d] px-5 py-3 font-bold text-white">Choose chargers <ArrowRight size={18}/></button></div>
        </section>}

        {step === 3 && <div className="grid items-start gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold">3. Build your proposal</h2><p className="mt-1 text-sm text-stone-500">Choose automatic recommendations or customise every charger yourself.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-stone-100 p-1">
              <button onClick={buildAutomaticMix} className={"rounded-lg px-3 py-3 text-sm font-bold " + (proposalMode === "automatic" ? "bg-emerald-900 text-white" : "text-stone-700")}>Automatic proposal</button>
              <button onClick={() => setProposalMode("custom")} className={"rounded-lg px-3 py-3 text-sm font-bold " + (proposalMode === "custom" ? "bg-emerald-900 text-white" : "text-stone-700")}>Customised proposal</button>
            </div>
            {proposalMode === "automatic" && <div className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">Suggested starter mix based on site type and parking answers. This is a preliminary recommendation, not an electrical design. Choose “Customised proposal” to change it.</div>}
            {proposalMode === "custom" && <div className="mt-5 grid gap-3 sm:grid-cols-2">{catalogue.map((p,i)=><div key={p.power+p.name} className="rounded-xl border border-stone-200 p-4">
              <div className="mb-3 flex h-28 items-center justify-center overflow-hidden rounded-lg bg-white"><img src={p.image} alt={`${p.power} ${p.name}`} className="h-full w-full object-contain" loading="lazy"/></div>
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-800">{p.category}</div><h3 className="mt-1 font-bold">{p.power} · {p.name}</h3><p className="mt-1 text-sm text-stone-600">Indicative hardware cost: {money(p.price)}</p>
              <button onClick={()=>addCharger(i)} className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-emerald-900 px-3 py-2 text-sm font-bold text-white"><Plus size={16}/> Add charger</button>
            </div>)}</div>}
            <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900">Pricing is an editable starting point from the supplier quotation previously provided. Confirm current price, GST, connector/gun configuration and technical suitability with the supplier before sending a final offer. 22 kW AC description needs supplier confirmation.</p>
            <div className="mt-6 flex justify-between gap-3"><button onClick={()=>setStep(2)} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-stone-300 px-4 py-3 font-bold"><ArrowLeft size={18}/> Back</button><button onClick={()=>{ if (chargers.length === 0) buildAutomaticMix(); else setPrepared(true); }} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#0d5c3d] px-5 py-3 font-bold text-white"><CheckCircle2 size={18}/> {chargers.length === 0 ? "Prepare recommended proposal" : "Prepare proposal"}</button></div>
          </section>
          <aside className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="text-lg font-bold">Proposal summary</h3><p className="mt-1 text-sm text-stone-500">Customer-facing prices are calculated below.</p>
            {chargers.length===0 ? <div className="mt-5 rounded-xl bg-stone-50 p-4 text-sm text-stone-500">No chargers selected yet. Add one from the list.</div> : <div className="mt-4 space-y-3">{chargers.map(c=><div key={c.id} className="border-b border-stone-100 pb-3"><div className="flex justify-between gap-2"><div className="font-semibold">{c.power} {c.name}</div><button aria-label="Remove charger" onClick={()=>setChargers(prev=>prev.filter(x=>x.id!==c.id))}><Trash2 size={16}/></button></div><div className="mt-2 grid grid-cols-2 gap-2"><label className="text-xs text-stone-500">Quantity<input className={inputClass} type="number" min="1" value={c.qty} onChange={e=>updateQty(c.id,Number(e.target.value))}/></label><label className="text-xs text-stone-500">Unit cost ₹<input className={inputClass} type="number" min="0" value={c.price} onChange={e=>updatePrice(c.id,Number(e.target.value))}/></label></div><div className="mt-2 text-right text-sm font-bold">{money(c.qty*c.price)}</div></div>)}</div>}
            <div className="mt-4 space-y-3 border-t pt-4 text-sm"><div className="flex justify-between"><span className="text-stone-600">Charger quantity</span><b>{totalQty}</b></div><div className="flex justify-between"><span className="text-stone-600">Hardware cost (internal)</span><b>{money(hardwareCost)}</b></div>
              <label className="block text-stone-600">Selling margin (%)<input className={inputClass} type="number" min="0" max="200" value={margin} onChange={e=>setMargin(Math.min(200,Math.max(0,Number(e.target.value))))}/></label>
              <label className="block text-stone-600">GST assumption (%)<input className={inputClass} type="number" min="0" max="28" value={tax} onChange={e=>setTax(Math.min(28,Math.max(0,Number(e.target.value))))}/></label>
              <div className="flex justify-between"><span>Proposal subtotal</span><b>{money(sellingSubtotal)}</b></div><div className="flex justify-between"><span>GST assumption</span><b>{money(taxAmount)}</b></div><div className="flex justify-between border-t pt-3 text-lg"><b>Indicative total</b><b className="text-emerald-900">{money(grandTotal)}</b></div>
              <label className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-900"><input type="checkbox" checked={showInternal} onChange={e=>setShowInternal(e.target.checked)}/> Include internal costs in print preview (internal use only)</label>
            </div>
            <button onClick={()=>window.print()} disabled={chargers.length===0} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0d5c3d] px-4 py-3 font-bold text-white disabled:opacity-40"><Download size={18}/> Download proposal PDF</button>
            <p className="mt-2 text-center text-xs text-stone-500">In the print window, select “Save as PDF” and click Save.</p>
          </aside>
        </div>}

        <section id="proposal-print" className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 sm:p-8 print:mt-0 print:border-0 print:p-0">
          <div className="flex flex-col justify-between gap-4 border-b-2 border-emerald-900 pb-5 sm:flex-row sm:items-start">
            <div><div className="text-2xl font-extrabold text-[#0d5c3d]">myEVStation</div><div className="mt-1 text-xs font-semibold text-stone-600">Founded by Ex-Indian Air Force Personnel</div><div className="mt-3 text-sm text-stone-500">EV charging solutions proposal</div></div>
            <div className="text-sm sm:text-right"><div className="font-bold">{proposalNo}</div><div className="mt-1 text-stone-500">{new Date().toLocaleDateString("en-IN")}</div></div>
          </div>
          <h2 className="mt-6 text-2xl font-bold">Site proposal{customer.name ? " for "+customer.name : ""}</h2>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2"><div><span className="text-stone-500">Site type:</span> {customer.site}</div><div><span className="text-stone-500">Contact:</span> {customer.phone || "Not provided"}</div><div><span className="text-stone-500">Location:</span> {[customer.city,customer.address].filter(Boolean).join(", ") || "To be confirmed"}</div><div><span className="text-stone-500">Prepared by:</span> {customer.salesperson || "myEVStation sales team"}</div></div>
          <h3 className="mt-6 font-bold">Recommended charger mix</h3>
          {chargers.length ? <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] border-collapse text-left text-sm"><thead><tr className="bg-emerald-50"><th className="p-3">Charger</th><th className="p-3">Qty</th><th className="p-3">Unit price</th><th className="p-3">Amount</th></tr></thead><tbody>{chargers.map(c=><tr key={c.id} className="border-b border-stone-200"><td className="p-3">{c.power} {c.name}<div className="text-xs text-stone-500">{c.category}</div></td><td className="p-3">{c.qty}</td><td className="p-3">{money(Math.round(c.price*(1+margin/100)))}</td><td className="p-3 font-semibold">{money(Math.round(c.price*(1+margin/100))*c.qty)}</td></tr>)}</tbody></table></div> : <p className="mt-2 text-sm text-stone-500">Charger selection pending site assessment.</p>}
          <div className="mt-4 ml-auto max-w-sm space-y-2 text-sm"><div className="flex justify-between"><span>Subtotal</span><b>{money(sellingSubtotal)}</b></div><div className="flex justify-between"><span>GST (assumed {tax}%)</span><b>{money(taxAmount)}</b></div><div className="flex justify-between border-t pt-3 text-lg"><b>Indicative total</b><b className="text-emerald-900">{money(grandTotal)}</b></div></div>
          {showInternal && <div className="mt-4 rounded bg-amber-50 p-3 text-xs font-bold text-amber-900">INTERNAL ONLY — Supplier hardware cost: {money(hardwareCost)}. Do not share with customer.</div>}
          {photos.length>0 && <><h3 className="mt-6 font-bold">Site photos</h3><div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.map((p,i)=><div key={p.name+i}><img src={p.url} alt={p.name} className="h-36 w-full rounded-lg object-cover"/><p className="mt-1 text-xs text-stone-500">{p.name}</p></div>)}</div></>}
          <h3 className="mt-6 font-bold">Site observations</h3><div className="mt-2 grid gap-2 text-sm sm:grid-cols-2"><p>Car parking: {parking.cars}</p><p>Two-wheeler parking: {parking.twoWheelers}</p><p>Parking duration: {parking.hours}</p><p>Electricity: {parking.power}</p><p>Permission: {parking.permission}</p></div>{customer.notes && <p className="mt-3 whitespace-pre-wrap text-sm"><b>Notes:</b> {customer.notes}</p>}
          <div className="mt-7 rounded-xl bg-stone-50 p-4 text-xs leading-5 text-stone-600"><b>Important:</b> This is an indicative proposal, not an electrical design or confirmed supplier quotation. Final charger model, connector/gun configuration, price, taxes, installation, sanctioned load, civil work and approvals must be verified before order. Installation and civil/electrical works are not included unless explicitly stated. Charging speed depends on vehicle compatibility and available power. Price and tax assumptions require approval before sharing.</div>
          <div className="mt-6 border-t pt-4 text-xs text-stone-500">myEVStation · EV charging solutions · Customer proposal</div>

          <div className="invoice-page mt-8 border-t-4 border-emerald-900 pt-7">
            <div className="flex items-start justify-between gap-4 border-b pb-5">
              <div><div className="text-2xl font-extrabold text-[#0d5c3d]">myEVStation</div><div className="mt-1 text-xs font-semibold text-stone-600">Founded by Ex-Indian Air Force Personnel</div><div className="mt-3 text-lg font-bold">TAX INVOICE / PROFORMA INVOICE</div><div className="text-xs text-stone-500">Draft for review — not a tax invoice until seller GST and statutory details are confirmed.</div></div>
              <div className="text-right text-sm"><div><b>Invoice ref:</b> INV-{proposalNo.replace("MES-","")}</div><div className="mt-1"><b>Date:</b> {new Date().toLocaleDateString("en-IN")}</div><div className="mt-1"><b>Proposal ref:</b> {proposalNo}</div></div>
            </div>
            <div className="mt-5 grid gap-5 text-sm sm:grid-cols-2">
              <div><div className="mb-2 font-bold uppercase tracking-wide text-stone-500">Bill to</div><div className="font-bold">{customer.name || "Customer name to be added"}</div><div>{customer.phone || "Phone to be added"}</div><div>{customer.email || ""}</div><div>{[customer.address, customer.city].filter(Boolean).join(", ") || "Billing address to be confirmed"}</div></div>
              <div><div className="mb-2 font-bold uppercase tracking-wide text-stone-500">Seller</div><div className="font-bold">myEVStation</div><div>Founded by Ex-Indian Air Force Personnel</div><div>Seller address, GSTIN and legal entity details: to be added before issuing a tax invoice.</div></div>
            </div>
            <h3 className="mt-7 font-bold">Invoice line items</h3>
            {chargers.length ? <table className="mt-3 w-full border-collapse text-left text-sm"><thead><tr className="bg-emerald-50"><th className="border p-2">Description</th><th className="border p-2 text-right">Qty</th><th className="border p-2 text-right">Unit rate</th><th className="border p-2 text-right">Amount</th></tr></thead><tbody>{chargers.map(c=><tr key={"inv-"+c.id} className="break-inside-avoid"><td className="border p-2">{c.power} {c.name}<div className="text-xs text-stone-500">{c.category}</div></td><td className="border p-2 text-right">{c.qty}</td><td className="border p-2 text-right">{money(Math.round(c.price*(1+margin/100)))}</td><td className="border p-2 text-right">{money(Math.round(c.price*(1+margin/100))*c.qty)}</td></tr>)}</tbody></table> : <p className="mt-2 text-sm text-stone-500">No items selected. Return to the proposal builder and select chargers.</p>}
            <div className="ml-auto mt-5 max-w-sm space-y-2 text-sm"><div className="flex justify-between"><span>Taxable subtotal</span><b>{money(sellingSubtotal)}</b></div><div className="flex justify-between"><span>GST estimate ({tax}%)</span><b>{money(taxAmount)}</b></div><div className="flex justify-between border-t pt-3 text-lg"><b>Total payable (indicative)</b><b className="text-emerald-900">{money(grandTotal)}</b></div></div>
            <div className="mt-6 rounded-lg bg-stone-50 p-4 text-sm leading-6"><b>Payment terms:</b> To be agreed in writing. <br/><b>Delivery / installation:</b> Not included unless separately confirmed in writing. <br/><b>Bank details:</b> To be shared on the final invoice. <br/><b>Tax note:</b> GST rate is an editable estimate only. Confirm correct HSN/SAC, tax rate, place of supply, seller legal name, address and GSTIN with your accountant before issuing a tax invoice.</div>
            <div className="mt-8 grid grid-cols-2 gap-8 text-xs text-stone-600"><div className="border-t pt-2">Customer acceptance / signature</div><div className="border-t pt-2 text-right">Authorised signatory — myEVStation</div></div>
            <div className="mt-6 border-t pt-4 text-xs text-stone-500">Combined document: site proposal + invoice draft · {proposalNo}</div>
          </div>
        </section>
      </div>
      <style jsx global>{`
        @media print {
          body { background: white !important; }
          body * { visibility: hidden; }
          #proposal-print, #proposal-print * { visibility: visible; }
          #proposal-print { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none !important; }
          header, button, input, select, textarea, aside { display: none !important; }
          #proposal-print img { break-inside: avoid; max-height: 170px; }
          #proposal-print table { width: 100%; }
          #proposal-print tr { break-inside: avoid; }
          @page { size: A4; margin: 12mm; }
        }
      `}</style>
    </main>
  );
}
