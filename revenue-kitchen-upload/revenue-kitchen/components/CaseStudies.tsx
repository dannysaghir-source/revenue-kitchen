export default function CaseStudies() {
  return (
    <section id="cases" style={{padding:"100px 60px",background:"#f8f8f8"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"56px",gap:"32px",flexWrap:"wrap"}}>
        <div>
          <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#0e9e8e",marginBottom:"20px"}}>Proof</span>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(44px,6vw,84px)",lineHeight:0.95,color:"#0a0a0a"}}>THE RESULTS <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Speak.</em></h2>
        </div>
        <p style={{fontSize:"14px",color:"#5a7070",lineHeight:1.8,maxWidth:"300px"}}>One case study. Real numbers. No fluff.</p>
      </div>
      <div style={{background:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",padding:"72px 64px",alignItems:"center",borderRadius:"16px"}}>
        <div>
          <span style={{display:"block",fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:"#0e9e8e",marginBottom:"18px"}}>OGS Smash Burgers — Banbury, UK</span>
          <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"38px",marginBottom:"16px",lineHeight:1.1}}>From Local Takeaway to Regional Brand</h3>
          <p style={{fontSize:"14px",color:"#5a7070",lineHeight:1.7,marginBottom:"32px"}}>3 years ago OGS was just another local takeaway. No brand, squeezed margins, no system. We rebuilt the positioning, launched paid social, and created content that made people talk. The result speaks for itself.</p>
          <div style={{display:"flex",gap:"36px",flexWrap:"wrap"}}>
            {[{num:"£1M+",label:"Annual Revenue"},{num:"3 YRS",label:"To Get Here"},{num:"0",label:"3rd Party Apps"}].map(r=>(
              <div key={r.label}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"40px",color:"#0e9e8e",lineHeight:1}}>{r.num}</div>
                <div style={{fontSize:"10px",letterSpacing:"1.5px",textTransform:"uppercase",color:"#5a7070",marginTop:"4px"}}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
          {[
            {label:"THE MODEL",text:"Single location. Banbury, UK. No delivery apps. No manager on site. Built on direct orders, repeat customers, and a brand people actually talk about."},
            {label:"THE RESULT",text:"£1M+ annual revenue from a single site — without handing 30% to Uber Eats or Just Eat."},
            {label:"THE PROOF",text:"I don't work the floor. The restaurant runs itself. That's what good systems and smart marketing actually look like."},
          ].map(p=>(
            <div key={p.label} style={{borderLeft:"3px solid #0e9e8e",paddingLeft:"20px"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"2px",color:"#0e9e8e",marginBottom:"6px"}}>{p.label}</div>
              <div style={{fontSize:"14px",color:"#5a7070",lineHeight:1.7}}>{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
