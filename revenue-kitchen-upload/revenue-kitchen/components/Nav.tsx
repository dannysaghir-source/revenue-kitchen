"use client";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scroll = (id: string) => { document.querySelector(id)?.scrollIntoView({behavior:"smooth"}); setMenuOpen(false); };

  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 60px",background:"rgba(255,255,255,0.97)",backdropFilter:"blur(4px)",borderBottom:"1px solid #e0eaea"}}>
        <a href="#" style={{display:"flex",alignItems:"center"}}>
          <Image src="/rk-logo.jpg" alt="Revenue Kitchen" width={120} height={60} style={{height:"60px",width:"auto",objectFit:"contain"}} />
        </a>
        <ul style={{display:"flex",gap:"36px",listStyle:"none",alignItems:"center"}}>
          {[["#about","About"],["#services","Services"],["#cases","Results"]].map(([id,label])=>(
            <li key={id}><button onClick={()=>scroll(id)} style={{background:"none",border:"none",color:"#5a7070",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",cursor:"pointer"}}>
              {label}
            </button></li>
          ))}
          <li><button onClick={()=>scroll("#contact")} style={{background:"#0d1f1f",color:"#fff",padding:"10px 24px",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",border:"none",cursor:"pointer",fontWeight:500}}>Book a Call</button></li>
        </ul>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{display:"none",flexDirection:"column",gap:"5px",background:"none",border:"none",cursor:"pointer",padding:"4px"}} className="mobile-menu-btn">
          <span style={{display:"block",width:"24px",height:"2px",background:"#0d1f1f"}}></span>
          <span style={{display:"block",width:"24px",height:"2px",background:"#0d1f1f"}}></span>
          <span style={{display:"block",width:"24px",height:"2px",background:"#0d1f1f"}}></span>
        </button>
      </nav>
      {menuOpen&&(
        <div style={{position:"fixed",top:"80px",left:0,right:0,background:"#fff",borderBottom:"1px solid #e0eaea",zIndex:99,padding:"24px 20px",display:"flex",flexDirection:"column",gap:"20px"}}>
          {[["#about","About"],["#services","Services"],["#cases","Results"],["#contact","Book a Call"]].map(([id,label])=>(
            <button key={id} onClick={()=>scroll(id)} style={{background:id==="#contact"?"#0d1f1f":"none",color:id==="#contact"?"#fff":"#5a7070",border:"none",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",cursor:"pointer",padding:id==="#contact"?"12px 24px":"0",textAlign:"left"}}>{label}</button>
          ))}
        </div>
      )}
    </>
  );
}
