import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react"

export default function Navbar() {
  const router = useRouter()
  const activeClass = route => router.pathname === route ? 'is-active' : ''
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(value => !value)
  }
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <Image src="/logo.png" width="64" height="64" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" onClick={toggleMenu} aria-expanded={String(openMenu)} data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className={`navbar-menu ${openMenu ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link href="/">
            <a className={`navbar-item ${activeClass('/')}`}>Home</a>
          </Link>

          <Link href="/users">
          <a className={`navbar-item ${activeClass('/users')}`}>Users</a>
          </Link>

          <Link href="/repos">
          <a className={`navbar-item ${activeClass('/repos')}`}>Repos</a>
          </Link>
        </div>
      </div>
    </nav>)
}