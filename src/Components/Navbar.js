import { useState } from 'react';
import { Link } from 'react-scroll';
 
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar" style={{ height: showMenu ? "15rem" : "5rem" }}>
      <img className="logo" alt="" src="./images/vm1.jpg" />
      <div className="desktopMenu">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={200} className="desktopMenuList">Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-80} duration={200} className="desktopMenuList">About</Link>
        <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-80} duration={200} className="desktopMenuList">Clients</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-80} duration={200} className="desktopMenuList">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contacts').scrollIntoView({behavior:"smooth"});
      }}>
        <img className='desktopMenuImg' alt="" src="./images/contact1.png" />Contact me</button>
      
        <img className="menu" alt="" src="./images/menu1.png" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }} >
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={200} className="menuList" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-80} duration={200} className="menuList" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-80} duration={200} className="menuList" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-80} duration={200} className="menuList" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to="contacts" spy={true} smooth={true} offset={-50} duration={200} className="menuList" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar