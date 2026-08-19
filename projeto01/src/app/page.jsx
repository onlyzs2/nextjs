import Link from "next/link";
import BannerCTA from "@/components/bannerCTA";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  
  await delay(3500);

  // throw new Error("simulando um erro catastrofico demoniaco dos infernos!!!!");

  return (
    <>
      
      <div className="principal">
        <div className="principalText">
          <h2>Unlock Your Business Potential With Facebook & Instagram Advertising</h2>
        </div>
        <div className="cell"><img src="https://my-codal.ir/assets/home-main.webp" alt="imagem" />
        </div>
        <div id="smallText">
          <p>Facebook Premier Level Partner Agency</p>
          </div>  
      </div>
        <div className="navRedirect">
          <a className="wwuPrincipal" href="">WORK WITH US</a>
        </div>





        <BannerCTA/>
        
    </>
  );
}
