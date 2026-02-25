"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" style={{padding:"100px 60px",background:"#f0f9f8",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"}}>
      <div style={{position:"relative"}}>
        <Image src="/rk-photo.jpg" alt="Danny Saghir" width={500} height={667} style={{width:"100%",height:"auto",objectFit:"cover",objectPosition:"center top",display:"block",borderRadius:"16px"}} />
        <div style={{position:"absolute",bottom:"-20px",right:"-20px",background:"#0e9e8e",color:"#fff",padding:"20px 28px",fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"2px",lineHeight:1.5}}>£1M+ REVENUE<br/>NO 3RD PARTY APPS<br/>10 YRS MARKETING</div>
      </div>
      <div>
        <span style={{display:"block",fontSize:"10px",letterSpacing:"4px",textTransform:"uppercase",color:"#0e9e8e",marginBottom:"20px"}}>About</span>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(44px,6vw,84px)",lineHeight:0.95,marginBottom:"20px",color:"#0a0a0a"}}>
          I&apos;M NOT AN <em style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",color:"#0e9e8e"}}>Agency</em> GUY.<br/>I&apos;M AN OPERATOR.
        </h2>
        <blockquote style={{fontFamily:"'Instrument Serif',serif",fontStyle:"italic",fontSize:"clamp(18px,2vw,24px)",lineHeight:1.5,borderLeft:"3px solid #0e9e8e",paddingLeft:"24px",marginBottom:"24px",color:"#0d1f1f"}}>
          &ldquo;I couldn&apos;t find anyone who actually understood what running a restaurant costs — so I became that person.&rdquo;
        </blockquote>
        <p style={{fontSize:"15px",color:"#5a7070",fontStyle:"italic",borderLeft:"3px solid #e0eaea",paddingLeft:"24px",marginBottom:"32px",lineHeight:1.7}}>
          You&apos;ve watched other restaurants half as good as yours get ten times the attention. That&apos;s not luck. That&apos;s marketing.
        </p>
        <div style={{fontSize:"15px",color:"#5a7070",lineHeight:1.85,marginBottom:"36px"}}>
          <p>My name is Danny Saghir. I run OGS — a smash burger and Nashville chicken restaurant doing £1M+ a year from a single Banbury location, no delivery apps, and I don&apos;t work the floor. I understand your P&amp;L because I live inside one. Everything I bring to your restaurant has been tested on my own money first.</p>
        </div>
        <ul style={{display:"flex",flexDirection:"column",gap:"14px",listStyle:"none",padding:0}}>
          {["£1M+ annual revenue from a single UK location — no 3rd party delivery apps","10 years in marketing","Franchise model currently in development","Building in public — real numbers, real lessons"].map(item=>(
            <li key={item} style={{display:"flex",alignItems:"center",gap:"14px",fontSize:"13px",color:"#0d1f1f"}}>
              <span style={{width:"6px",height:"6px",background:"#0e9e8e",flexShrink:0,display:"inline-block"}}></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
