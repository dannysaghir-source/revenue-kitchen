export default function Services() {
  const services = [
    {num:"01",title:"FIX REVENUE LEAKS",desc:"Delivery app commissions, poor pricing strategy, menu items that cost more than they make — we find where your money is walking out the door and plug it.",payoff:"You stop bleeding before you start scaling."},
    {num:"02",title:"OPTIMISE MARGINS",desc:"We audit your full operation — menu mix, supplier costs, order channels — and build a strategy that puts more profit on every single transaction.",payoff:"Same revenue. More money in your pocket."},
    {num:"03",title:"SCALE WITH ADS",desc:"Once your margins are healthy, we pour fuel on the fire. Meta ads built for restaurant conversion — more customers, more orders, more revenue.",payoff:"Growth that doesn't eat your profit."},
  ];
  return (
    <section id="services" className="rk-section" style={{padding:"100px 60px",background:"#fff"}}>
      <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#0e9e8e",marginBottom:"20px"}}>What We Do</span>
      <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(44px,6vw,84px)",lineHeight:0.95,marginBottom:"20px",color:"#0a0a0a"}}>I HAVE THE <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Secret</em><br/>SAUCE.</h2>
      <p style={{fontSize:"15px",color:"#5a7070",lineHeight:1.8,maxWidth:"520px",marginBottom:"64px"}}>Most agencies guess. I know. I run the restaurant. Every service is built around one thing — more revenue in your till.</p>
      <div className="rk-grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
        {services.map(s=>(
          <div key={s.num} style={{background:"#1c1c1e",border:"1px solid #2a2a2a",padding:"44px 36px",borderRadius:"16px"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"64px",color:"rgba(14,158,142,0.25)",lineHeight:1,marginBottom:"20px"}}>{s.num}</div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"22px",letterSpacing:"1px",marginBottom:"14px",color:"#fff"}}>{s.title}</div>
            <div style={{fontSize:"14px",color:"rgba(255,255,255,0.5)",lineHeight:1.7}}>{s.desc}</div>
            <span style={{fontSize:"13px",color:"#0e9e8e",fontStyle:"italic",marginTop:"16px",display:"block"}}>{s.payoff}</span>
          </div>
        ))}
      </div>
    </section>
  );
}