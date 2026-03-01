"use client";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const w = window as any;
    (function(C: any, A: string, L: string) {
      const p = (a: any, ar: any) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function() {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) { const api: any = function() { p(api, arguments); }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === "string") { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ["initNamespace", ns]); } else { p(cal, ar); } return; }
        p(cal, ar);
      };
    })(w, "https://app.cal.eu/embed/embed.js", "init");
    w.Cal("init", "30min", {origin:"https://app.cal.eu"});
    w.Cal.ns["30min"]("inline", {elementOrSelector:"#my-cal-inline-30min", config:{layout:"month_view",useSlotsViewOnSmallScreen:"true",theme:"dark"}, calLink:"revenuekitchen/30min"});
    w.Cal.ns["30min"]("ui", {theme:"dark", cssVarsPerTheme:{light:{"cal-brand":"#0e9e8e"}}, hideEventTypeDetails:false, layout:"month_view"});
  }, []);
  return (
    <section id="contact" style={{padding:"50px 20px",background:"#0d1f1f",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"600px",height:"600px",background:"radial-gradient(circle,rgba(14,158,142,0.15) 0%,transparent 70%)",pointerEvents:"none"}}></div>
      <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#12b8a5",marginBottom:"20px",position:"relative"}}>Get Started</span>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,9vw,120px)",lineHeight:0.9,color:"#fff",marginBottom:"16px",position:"relative"}}>
        READY TO <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Actually</em><br/>GROW?
      </h2>
      <p style={{fontSize:"16px",color:"rgba(255,255,255,0.5)",maxWidth:"440px",margin:"0 auto 12px",lineHeight:1.7,position:"relative"}}>No sales pitch. No agency jargon. A straight conversation about your restaurant, your numbers, and whether we can help.</p>
      <a href="mailto:hello@revenuekitchen.co.uk" style={{display:"block",color:"#0e9e8e",fontSize:"15px",letterSpacing:"1px",textDecoration:"none",marginBottom:"8px",position:"relative"}}>hello@revenuekitchen.co.uk</a>
      <p style={{fontSize:"13px",color:"rgba(255,255,255,0.3)",marginBottom:"24px",position:"relative"}}>Pick a time below. 30 minutes. No pitch — just a straight conversation.</p>
      <div style={{maxWidth:"900px",margin:"0 auto",borderRadius:"12px",position:"relative"}}>
        <div style={{width:"100%",height:"900px",overflow:"auto"}} id="my-cal-inline-30min"></div>
      </div>
    </section>
  );
}
