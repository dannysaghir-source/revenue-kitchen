import Image from "next/image";

export default function Footer() {
  return (
    <footer className="rk-footer" style={{background:"#f4f7f7",borderTop:"1px solid #e0eaea",padding:"48px 20px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"16px"}}>
      <Image src="/logo.png" alt="Revenue Kitchen" width={200} height={60} style={{height:"48px",width:"auto",objectFit:"contain"}} />
      <a href="mailto:hello@revenuekitchen.co.uk" style={{fontSize:"13px",color:"#0e9e8e",textDecoration:"none"}}>hello@revenuekitchen.co.uk</a>
      <address style={{fontStyle:"normal",fontSize:"13px",color:"#5a7070",lineHeight:"1.6"}}>6 South Bar Street<br />Banbury OX16 9AA</address>
      <span style={{fontSize:"11px",letterSpacing:"1px",color:"#5a7070"}}>© 2025 Revenue Kitchen. Built by an operator, for operators.</span>
    </footer>
  );
}
