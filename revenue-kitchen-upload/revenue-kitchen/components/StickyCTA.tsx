"use client";

export default function StickyCTA() {
  const scroll = () => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"});
  return (
    <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:200,background:"#0d1f1f",borderTop:"2px solid #0e9e8e",padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"}} className="sticky-cta">
      <div>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"16px",color:"#fff",letterSpacing:"1px"}}>READY TO GROW?</div>
        <div style={{fontSize:"11px",color:"rgba(255,255,255,0.45)",letterSpacing:"1px"}}>30 min free strategy call</div>
      </div>
      <button onClick={scroll} style={{background:"#0e9e8e",color:"#fff",padding:"12px 24px",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",border:"none",cursor:"pointer",whiteSpace:"nowrap"}}>Book Now →</button>
    </div>
  );
}
