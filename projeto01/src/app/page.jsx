import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo"><img src="https://thumb.tildacdn.com/tild6562-3465-4362-b435-343935623062/-/format/webp/Frame_1908.png" alt="imagem" />
          </div>
          <div className="navRedirect">
            <select>
              <option>WHAT WE DO </option>
            </select>
            <a href="">BLOG</a>
            <a href="">PODCAST</a>
            <a href="">CARRERS</a>
            <a className="wwu" href="">WORK WITH US</a>
          </div>
        </nav>
      </header>
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
          <a className="wwuPrincipal" href="">WORK WITH US</a>aaa
        </div>
        
    </>
  );
}
