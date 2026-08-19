import "@/components/header/header.css"
import Link from "next/link";

export default function Header(){
    return(
        <>
        <header>
                  <nav className="navbar">
                    <div className="logo"><Link href={"/"}><img src="https://thumb.tildacdn.com/tild6562-3465-4362-b435-343935623062/-/format/webp/Frame_1908.png" alt="imagem" />
                    </Link></div>
                    <div className="navRedirect">
                      <select>
                        <option>WHAT WE DO </option>
                      </select>
                      <Link href="/blog">BLOG</Link>
                      <Link href="/careers">CAREERS</Link>
                      <Link href="/podcast">PODCAST</Link>
                      <Link className="wwu" href="/WWU">WORK WITH US</Link>
                    </div>
                  </nav>
                </header>
        </>
    )
}