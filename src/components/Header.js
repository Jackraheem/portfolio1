import React,{useState} from 'react';
import "./Header.css";


const Header = () => {
    //change background header
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    // Toggle menu
    const[Toggle,showMenu] = useState(false);
    const[activeNav,setactiveNav] = useState("#home")

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Shaik Abdul Raheem</a>

            <div className={Toggle ? "nav_menu show-menu" :"nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" onClick={()=>{
                            setactiveNav('#home')
                        }} className={activeNav === "#home" ?"nav_link active-link":"nav_link"}>
                            <i className="uil uil-estate nav_icon"></i>Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="uil uil-user nav_icon"></i>About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i className="uil uil-file-alt nav_icon"></i>skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" className='nav_link'>
                             {/* <i className="uil uil-scenery nav_icon"></i>Project */}
                            <i className="uil uil-graduation-cap nav_icon"></i>Project
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" className='nav_link'>
                            <i className="uil uil-briefcase-alt nav_icon"></i>services
                        </a>
                    </li>

                   

                    <li className="nav_item">
                        <a href="#contact" className='nav_link'>
                            <i className="uil uil-message nav_icon"></i>Contact
                        </a>
                    </li>


                </ul>

                <i class="uil uil-times nav_close" onClick={() =>showMenu(!Toggle)}></i>

            </div>
            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps" title='Click me'></i>
            </div>
        </nav>

    </header>
  )
}

export default Header
