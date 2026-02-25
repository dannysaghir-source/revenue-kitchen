export default function Who() {
  return (
    <section id="who" style={{padding:"100px 60px",background:"#f8f8f8"}}>
      <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#0e9e8e",marginBottom:"20px"}}>Who This Is For</span>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(44px,6vw,84px)",lineHeight:0.95,marginBottom:"48px",color:"#0a0a0a"}}>YOU&apos;RE ALREADY <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Open.</em></h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px",marginBottom:"24px"}}>
        {[
          {icon:"✓",title:"YOU'RE ALREADY OPEN",body:"You have a restaurant that's trading. You're not looking for help launching — you want to grow what you've already built."},
          {icon:"✓",title:"DOING £250K+ A YEAR",body:"You're generating real revenue. There's something to work with. We optimise and scale — we don't build from zero."},
          {icon:"✓",title:"READY TO INVEST",body:"You understand that growth costs money. You're not looking for the cheapest option — you want the right one."},
        ].map(c=>(
          <div key={c.title} style={{background:"#fff",borderRadius:"16px",padding:"40px 32px",border:"1px solid #e0eaea"}}>
            <div style={{width:"40px",height:"40px",background:"#0e9e8e",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px",color:"#fff",fontSize:"18px"}}>{c.icon}</div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"22px",marginBottom:"12px",color:"#0a0a0a"}}>{c.title}</div>
            <div style={{fontSize:"14px",color:"#5a7070",lineHeight:1.7}}>{c.body}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#1c1c1e",borderRadius:"16px",padding:"40px 48px",display:"grid",gridTemplateColumns:"auto 1fr",gap:"32px",alignItems:"center"}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(32px,3vw,48px)",color:"#fff",whiteSpace:"nowrap"}}>WHO THIS<br/>ISN&apos;T FOR</div>
        <div>
          {["Restaurants doing under £250K a year","Startups or pre-launch concepts","Anyone looking for the cheapest marketing they can find"].map(item=>(
            <div key={item} style={{display:"flex",alignItems:"center",gap:"12px",fontSize:"14px",color:"rgba(255,255,255,0.6)",marginBottom:"14px"}}>
              <span style={{color:"#e05252",fontSize:"16px"}}>✕</span>{item}
            </div>
          ))}
        </div>
      </div>
      <p style={{textAlign:"center",fontSize:"13px",color:"#0e9e8e",letterSpacing:"1px",marginTop:"40px",fontWeight:500}}>⚠ I only work with a small number of restaurants at a time to make sure every client gets my full attention.</p>
    </section>
  );
}
