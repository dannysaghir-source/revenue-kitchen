import Image from "next/image";

export default function Footer() {
  return (
    <footer className="rk-footer" style={{background:"#f4f7f7",borderTop:"1px solid #e0eaea",padding:"36px 60px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",flexWrap:"wrap"}}>
      <Image src="/rk-logo.jpg" alt="Revenue Kitchen" width={88} height={44} style={{height:"44px",width:"auto",objectFit:"contain"}} />
      <a href="mailto:hello@revenuekitchen.co.uk" style={{fontSize:"13px",color:"#0e9e8e",textDecoration:"none"}}>hello@revenuekitchen.co.uk</a>
      <span style={{fontSize:"11px",letterSpacing:"1px",color:"#5a7070"}}>© 2025 Revenue Kitchen. Built by an operator, for operators.</span>
    </footer>
  );
}