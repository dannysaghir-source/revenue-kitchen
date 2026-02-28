"use client";

export default function Hero() {
  const smoothScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="rk-section" style={{display:"flex",flexDirection:"column",padding:"20px 60px 80px",marginTop:"88px",position:"relative",overflow:"hidden",background:"linear-gradient(135deg,#0d1f1f 0%,#0e3030 60%,rgba(14,158,142,0.15) 100%)"}}>
      <div aria-hidden style={{position:"absolute",top:"50%",right:"-40px",transform:"translateY(-50%)",fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(180px,22vw,320px)",color:"rgba(14,158,142,0.05)",lineHeight:1,pointerEvents:"none",userSelect:"none"}}>£££</div>
      <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(56px,10vw,148px)",lineHeight:0.9,maxWidth:"900px",margin:"0 0 32px 0",color:"#fff"}}>
        YOUR RESTAURANT<br/>DESERVES TO <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Print</em><br/>MONEY.
      </h1>
      <p style={{fontSize:"17px",color:"rgba(255,255,255,0.6)",maxWidth:"520px",lineHeight:1.75,marginBottom:"16px"}}>
        Just Eat and Uber Eats eating your margins? Stuck working <em style={{color:"rgba(255,255,255,0.8)"}}>in</em> your restaurant instead of <em style={{color:"rgba(255,255,255,0.8)"}}>on</em> it? I&apos;ve solved both. My restaurant does <strong style={{color:"#fff",fontWeight:400}}>£1M+ a year, with no 3rd party delivery apps, and I don&apos;t work the floor.</strong> Now I help other operators do the same.
      </p>
      <div style={{display:"inline-flex",alignItems:"center",gap:"12px",background:"rgba(14,158,142,0.12)",border:"1px solid rgba(14,158,142,0.4)",padding:"12px 20px",marginBottom:"32px",borderRadius:"2px"}}>
        <span style={{width:"8px",height:"8px",background:"#0e9e8e",borderRadius:"50%",flexShrink:0,display:"inline-block"}}></span>
        <p style={{fontSize:"14px",color:"rgba(255,255,255,0.9)",letterSpacing:"0.5px",margin:0,fontWeight:400}}>30 minutes — I&apos;ll audit your restaurant&apos;s revenue leaks for free.</p>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap",marginBottom:"64px"}}>
        <button onClick={()=>smoothScroll("#contact")} style={{background:"#0e9e8e",color:"#fff",padding:"16px 40px",fontSize:"12px",letterSpacing:"2px",textTransform:"uppercase",border:"none",cursor:"pointer"}}>Book a Strategy Call</button>
        <button onClick={()=>smoothScroll("#cases")} style={{color:"rgba(255,255,255,0.7)",fontSize:"12px",letterSpacing:"1.5px",textTransform:"uppercase",background:"none",border:"none",cursor:"pointer"}}>See the results →</button>
      </div>
      <div className="rk-hero-stats" style={{display:"flex",gap:"48px",flexWrap:"wrap",paddingTop:"36px",borderTop:"1px solid rgba(255,255,255,0.12)"}}>
        {[{num:"10+",label:"Years in Marketing"},{num:"£1M+",label:"Revenue, No Delivery Apps"},{num:"£462K",label:"Personal Capital Deployed"}].map(s=>(
          <div key={s.label}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"48px",color:"#fff",lineHeight:1}}>{s.num}</div>
            <div style={{fontSize:"10px",letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",marginTop:"6px"}}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}