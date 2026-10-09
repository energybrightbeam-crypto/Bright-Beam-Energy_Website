"use client";

import { useMemo, useState } from "react";
import { FileText, LockKeyhole, Plus, Printer, Send, ShieldCheck, Trash2, MessageCircle } from "lucide-react";

type LineItem = { description: string; quantity: number; rate: number };
const money = (amount: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(amount || 0);

function makePdf(lines: string[]) {
  const safe = lines.flatMap((line) => {
    const ascii = line.replace(/₹/g, "INR ").replace(/[–—]/g, "-").replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[^\x20-\x7E]/g, "?");
    const chunks: string[] = [];
    for (let i = 0; i < ascii.length; i += 88) chunks.push(ascii.slice(i, i + 88));
    return chunks.length ? chunks : [""];
  });
  const pages = Array.from({ length: Math.max(1, Math.ceil(safe.length / 40)) }, (_, i) => safe.slice(i * 40, (i + 1) * 40));
  const objects: string[] = [];
  const pageIds = pages.map((_, i) => 3 + i * 2);
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>`;
  pages.forEach((pageLines, i) => {
    const pageId = 3 + i * 2;
    const contentId = pageId + 1;
    const commands = pageLines.map((line, row) => `${row === 0 ? "" : "0 -17 Td "}(${line.replace(/[\\()]/g, "\\$&")}) Tj`).join(" ");
    const stream = `BT /F1 10 Tf 48 790 Td ${commands} ET`;
    objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 ${3 + pages.length * 2} 0 R >> >> /Contents ${contentId} 0 R >>`;
    objects[contentId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });
  const fontId = 3 + pages.length * 2;
  objects[fontId] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let id = 1; id < objects.length; id++) {
    offsets[id] = pdf.length;
    pdf += `${id} 0 obj\n${objects[id]}\nendobj\n`;
  }
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let id = 1; id < objects.length; id++) pdf += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

export function QuotationWorkspace() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [kind, setKind] = useState<"Quotation" | "Invoice">("Quotation");
  const [business, setBusiness] = useState("Bright Beam Energy");
  const [phone, setPhone] = useState("+91 94191 08003");
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [customerWhatsApp, setCustomerWhatsApp] = useState("");
  const [whatsAppError, setWhatsAppError] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("BBE-001");
  const [date, setDate] = useState("");
  const [tax, setTax] = useState(0);
  const [notes, setNotes] = useState("Thank you for choosing Bright Beam Energy.");
  const [items, setItems] = useState<LineItem[]>([{ description: "Solar panel system", quantity: 1, rate: 0 }]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.rate) || 0), 0), [items]);
  const total = subtotal + subtotal * (Number(tax) || 0) / 100;

  const unlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === "9419108003") {
      setDate(new Date().toISOString().slice(0, 10));
      setUnlocked(true);
      setPasswordError("");
    }
    else setPasswordError("That password isn’t correct. Please try again.");
  };

  const sendEmail = () => {
    if (!email.trim()) { document.getElementById("customer-email")?.focus(); return; }
    const rows = items.map((item) => `${item.description} — ${item.quantity} × ${money(item.rate)} = ${money(item.quantity * item.rate)}`).join("\n");
    const body = `${kind} ${number}\nDate: ${date}\n\nTo: ${customer}\n${address}\n\n${rows}\n\nSubtotal: ${money(subtotal)}\nTax (${tax}%): ${money(total - subtotal)}\nTotal: ${money(total)}\n\n${notes}\n\n${business}\n${phone}`;
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`${kind} ${number} from ${business}`)}&body=${encodeURIComponent(body)}`;
  };

  const sendWhatsApp = async () => {
    const enteredNumber = customerWhatsApp.replace(/\D/g, "");
    if (enteredNumber.length < 10 || enteredNumber.length > 15) {
      setWhatsAppError("Enter a valid number with country code, or a 10-digit Indian number.");
      document.getElementById("customer-whatsapp")?.focus();
      return;
    }
    setWhatsAppError("");
    const phoneNumber = enteredNumber.length === 10 ? `91${enteredNumber}` : enteredNumber;
    const greeting = customer ? `Dear ${customer},` : "Hello,";
    const message = `${greeting}\n\nPlease find your ${kind.toLowerCase()} attached.\n\nDocument: ${number}\nDate: ${date}\nTotal: ${money(total)}\n\nRegards,\n${business}\n${phone}`;
    const pdf = makePdf([
      business, phone, "", kind.toUpperCase(), `Document number: ${number}`, `Date: ${date}`, "",
      `Prepared for: ${customer || "Customer"}`, email ? `Email: ${email}` : "", address ? `Address: ${address}` : "", "",
      "DESCRIPTION | QTY | RATE | AMOUNT",
      ...items.map((item) => `${item.description} | ${item.quantity} | ${money(item.rate)} | ${money(item.quantity * item.rate)}`), "",
      `Subtotal: ${money(subtotal)}`, `Tax (${tax}%): ${money(total - subtotal)}`, `TOTAL: ${money(total)}`, "", notes,
    ]);
    const safeNumber = number.replace(/[^a-z0-9-_]/gi, "-") || "document";
    const file = new File([pdf], `${kind.toLowerCase()}-${safeNumber}.pdf`, { type: "application/pdf" });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: `${kind} ${number}`, text: message });
        return;
      } catch (error) {
        // If the owner closes the share sheet, don't start a second send flow.
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    const downloadUrl = URL.createObjectURL(pdf);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(downloadUrl);
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  if (!unlocked) return (
    <section className="min-h-[70vh] bg-mist px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-9">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-900 text-white"><LockKeyhole size={25} /></span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-leaf-600">Owner access</p>
        <h1 className="mt-2 text-3xl font-bold text-navy-950">Quotation &amp; invoice desk</h1>
        <p className="mt-3 leading-6 text-slate-600">Enter the owner password to create a customer quotation or invoice.</p>
        <form onSubmit={unlock} className="mt-7 space-y-4">
          <label htmlFor="owner-password" className="block text-sm font-semibold text-slate-700">Password</label>
          <input id="owner-password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-700/20" placeholder="Enter password" required />
          {passwordError && <p role="alert" className="text-sm font-medium text-red-600">{passwordError}</p>}
          <button className="w-full rounded-xl bg-navy-900 px-5 py-3.5 font-semibold text-white hover:bg-navy-700">Continue</button>
        </form>
        <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck size={15} className="mt-0.5 shrink-0" />Owner workspace access is required before customer and pricing details are shown.</p>
      </div>
    </section>
  );

  const field = "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-navy-700 focus:ring-2 focus:ring-navy-700/15";
  const label = "mb-1.5 block text-sm font-semibold text-slate-700";
  return (
    <section className="min-h-screen bg-mist px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm font-semibold uppercase tracking-widest text-leaf-600">Owner workspace</p><h1 className="mt-2 text-3xl font-bold text-navy-950 sm:text-4xl">Quotation &amp; invoice desk</h1><p className="mt-2 text-slate-600">Customize the document, review it, then prepare an email for your customer.</p></div>
          <button onClick={() => window.print()} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-navy-900 px-4 py-2.5 font-semibold text-navy-900 hover:bg-white"><Printer size={18} />Print / Save PDF</button>
        </div>
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)]">
          <div className="space-y-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
            <div className="grid grid-cols-2 gap-3">
              {(["Quotation", "Invoice"] as const).map((option) => <button key={option} onClick={() => setKind(option)} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 py-3 font-semibold ${kind === option ? "border-navy-900 bg-navy-900 text-white" : "border-slate-200 text-slate-700 hover:bg-mist"}`}><FileText size={17} />{option}</button>)}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label><span className={label}>Business name</span><input className={field} value={business} onChange={(e) => setBusiness(e.target.value)} /></label>
              <label><span className={label}>Business phone</span><input className={field} value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
              <label><span className={label}>Customer name</span><input className={field} value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="Customer / company" /></label>
              <label><span className={label}>Customer email</span><input id="customer-email" type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" /></label>
              <label><span className={label}>Receiver’s WhatsApp number</span><input id="customer-whatsapp" type="tel" inputMode="tel" autoComplete="tel" aria-describedby={whatsAppError ? "whatsapp-error" : "whatsapp-help"} className={field} value={customerWhatsApp} onChange={(e) => { setCustomerWhatsApp(e.target.value); setWhatsAppError(""); }} placeholder="+91 98765 43210" />{whatsAppError ? <span id="whatsapp-error" role="alert" className="mt-1 block text-xs text-red-600">{whatsAppError}</span> : <span id="whatsapp-help" className="mt-1 block text-xs text-slate-500">Enter the customer’s number, including country code.</span>}</label>
              <label className="sm:col-span-2"><span className={label}>Customer address</span><input className={field} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address / city / PIN" /></label>
              <label><span className={label}>{kind} number</span><input className={field} value={number} onChange={(e) => setNumber(e.target.value)} /></label>
              <label><span className={label}>Date</span><input type="date" className={field} value={date} onChange={(e) => setDate(e.target.value)} /></label>
            </div>
            <div>
              <div className="mb-3 flex items-center justify-between gap-3"><h2 className="font-bold text-navy-950">Items and pricing</h2><button onClick={() => setItems([...items, { description: "", quantity: 1, rate: 0 }])} className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-navy-700 hover:bg-mist"><Plus size={16} />Add item</button></div>
              <div className="space-y-3">{items.map((item, index) => <div key={index} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_40px] items-end gap-2 sm:grid-cols-[minmax(0,1fr)_100px_130px_42px]">
                <label className="col-span-3 min-w-0 sm:col-span-1"><span className={`${label} text-xs`}>Description</span><input aria-label="Item description" className={field} value={item.description} onChange={(e) => setItems(items.map((it, i) => i === index ? { ...it, description: e.target.value } : it))} placeholder="Solar panels, installation…" /></label>
                <label><span className={`${label} text-xs`}>Qty</span><input aria-label="Quantity" type="number" min="0" className={field} value={item.quantity} onChange={(e) => setItems(items.map((it, i) => i === index ? { ...it, quantity: Number(e.target.value) } : it))} /></label>
                <label><span className={`${label} text-xs`}>Rate (₹)</span><input aria-label="Rate in rupees" type="number" min="0" className={field} value={item.rate} onChange={(e) => setItems(items.map((it, i) => i === index ? { ...it, rate: Number(e.target.value) } : it))} /></label>
                <button aria-label={`Remove item ${index + 1}`} disabled={items.length === 1} onClick={() => setItems(items.filter((_, i) => i !== index))} className="mb-1 flex size-10 items-center justify-center rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 disabled:opacity-30"><Trash2 size={17} /></button>
              </div>)}</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label><span className={label}>Tax (%)</span><input type="number" min="0" className={field} value={tax} onChange={(e) => setTax(Number(e.target.value))} /></label>
              <label><span className={label}>Notes / payment terms</span><input className={field} value={notes} onChange={(e) => setNotes(e.target.value)} /></label>
            </div>
          </div>
          <aside className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7 xl:sticky xl:top-24">
            <div className="border-b border-slate-200 pb-5"><p className="text-sm font-semibold uppercase tracking-widest text-leaf-600">Document preview</p><h2 className="mt-2 text-2xl font-bold text-navy-950">{kind}</h2><p className="mt-1 text-sm text-slate-500">{number} · {date}</p></div>
            <div className="py-5"><p className="font-bold text-navy-950">{business || "Your business"}</p><p className="text-sm text-slate-600">{phone}</p><p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">Prepared for</p><p className="mt-1 font-semibold text-slate-800">{customer || "Customer name"}</p><p className="break-words text-sm text-slate-500">{email || "Customer email"}{address ? ` · ${address}` : ""}</p></div>
            <div className="space-y-3 border-y border-slate-200 py-4">{items.map((item, i) => <div key={i} className="flex justify-between gap-3 text-sm"><span className="min-w-0"><span className="block font-medium text-slate-800">{item.description || "Item description"}</span><span className="text-slate-500">{item.quantity} × {money(item.rate)}</span></span><span className="shrink-0 font-semibold text-slate-800">{money(item.quantity * item.rate)}</span></div>)}</div>
            <div className="space-y-2 py-4 text-sm"><div className="flex justify-between text-slate-600"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="flex justify-between text-slate-600"><span>Tax ({tax}%)</span><span>{money(total - subtotal)}</span></div><div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-bold text-navy-950"><span>Total</span><span>{money(total)}</span></div></div>
            <p className="mb-5 text-sm leading-6 text-slate-600">{notes}</p>
            <button onClick={sendWhatsApp} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-leaf-600 px-4 py-3 font-semibold text-white hover:bg-leaf-500"><MessageCircle size={18} />Share {kind.toLowerCase()} PDF with receiver</button>
            <button onClick={sendEmail} className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-navy-900 px-4 py-3 font-semibold text-navy-900 hover:bg-mist"><Send size={17} />Prepare email to customer</button>
            <p className="mt-3 text-xs leading-5 text-slate-500">On phones that support file sharing, choose WhatsApp in the share sheet, select the receiver, and send the attached PDF. If file sharing isn’t supported, the PDF downloads and WhatsApp opens to the receiver’s number with a message ready; attach the PDF manually.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
