import Script from "next/script";
export default function Contact() {
  return (
    <section id="contact" style={{padding:"80px 20px",background:"#0d1f1f",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"600px",height:"600px",background:"radial-gradient(circle,rgba(14,158,142,0.15) 0%,transparent 70%)",pointerEvents:"none"}}></div>
      <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#12b8a5",marginBottom:"20px",position:"relative"}}>Get Started</span>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(48px,7vw,90px)",lineHeight:0.9,color:"#fff",marginBottom:"16px",position:"relative"}}>
        READY TO <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Actually</em><br/>GROW?
      </h2>
      <p style={{fontSize:"15px",color:"rgba(255,255,255,0.5)",maxWidth:"400px",margin:"0 auto 10px",lineHeight:1.6,position:"relative"}}>No sales pitch. No agency jargon. A straight conversation about your restaurant, your numbers, and whether we can help.</p>
      <a href="mailto:hello@revenuekitchen.co.uk" style={{display:"block",color:"#0e9e8e",fontSize:"14px",letterSpacing:"1px",textDecoration:"none",marginBottom:"6px",position:"relative"}}>hello@revenuekitchen.co.uk</a>
      <p style={{fontSize:"12px",color:"rgba(255,255,255,0.3)",marginBottom:"32px",position:"relative"}}>Pick a time below. 30 minutes. No pitch — just a straight conversation.</p>
      <div style={{maxWidth:"480px",margin:"0 auto",borderRadius:"12px",overflow:"hidden",background:"#fff",position:"relative"}}>
        <div className="calendly-inline-widget" data-url="https://calendly.com/danyalsaghir/30min?hide_event_type_details=1&hide_gdpr_banner=1" data-resize="true" style={{minWidth:"280px",height:"650px"}}></div>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}
