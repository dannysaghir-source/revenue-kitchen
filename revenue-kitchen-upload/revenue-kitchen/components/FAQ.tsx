"use client";
import { useState } from "react";

const faqs = [
  {q:"Do you work with any type of restaurant?",a:"We work best with restaurants already doing £250K+ in annual revenue. You're established, you have a product that works — we help you scale it. We don't work with brand new startups or restaurants that haven't found their footing yet."},
  {q:"How much does it cost?",a:"We don't publish pricing — every restaurant is different. Book a call and we'll have an honest conversation about what makes sense for your business and budget."},
  {q:"Do I need to be using delivery apps?",a:"No. In fact, one of the things we specialise in is helping restaurants reduce their reliance on third party apps and build direct revenue. My own restaurant does £1M+ with zero delivery apps."},
  {q:"How quickly will I see results?",a:"Paid ads can generate results within weeks. Fixing margins and building systems takes longer — but those are the changes that compound. We're not here to give you a quick spike, we're here to build something sustainable."},
  {q:"What makes you different from other marketing agencies?",a:"We're restaurant-only specialists — we don't work with e-commerce brands, gyms, or anyone else. Just restaurants. And unlike every other agency, I actually run one. I live inside a P&L every day. When I give you advice, it's because I've tested it with my own money, in my own business."},
  {q:"Is this worth the investment?",a:"My own restaurant does £1M+ a year from a single location with no delivery apps and I don't work the floor. That didn't happen by accident — it happened because of the exact systems and marketing strategies I now bring to other restaurants. If you're already doing £250K+, the question isn't whether you can afford to invest in growth. It's whether you can afford not to."},
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" className="rk-section" style={{padding:"100px 60px",background:"#fff"}}>
      <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#0e9e8e",marginBottom:"20px"}}>FAQ</span>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(44px,6vw,84px)",lineHeight:0.95,marginBottom:"48px",color:"#0a0a0a"}}>QUESTIONS <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Answered.</em></h2>
      <div style={{maxWidth:"760px"}}>
        {faqs.map((f,i)=>(
          <div key={i} style={{borderTop:"1px solid #e0eaea",borderBottom:i===faqs.length-1?"1px solid #e0eaea":"none"}}>
            <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",textAlign:"left",background:"none",border:"none",padding:"24px 0",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"'DM Sans',sans-serif",fontSize:"16px",fontWeight:400,color:"#0d1f1f"}}>
              {f.q}
              <span style={{fontSize:"22px",color:"#0e9e8e",transform:open===i?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.3s",flexShrink:0,marginLeft:"16px"}}>+</span>
            </button>
            {open===i&&<div style={{paddingBottom:"24px",fontSize:"14px",color:"#5a7070",lineHeight:1.8}}>{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}