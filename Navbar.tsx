inside layout
{
  // const [isSticky, setIsSticky] = useState(false);
<div className={` ${isSticky ? "sticky top-0 bg-black z-50" : ""}`}>
    <Navbar isSticky={isSticky} setIsSticky={setIsSticky} />
</div> 
}

Navbar.tsx

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import logo from "../favicon.ico";
import Link from 'next/link';

type NavbarProps = {
    isSticky: boolean;
    setIsSticky: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({isSticky, setIsSticky}:NavbarProps) {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        function handleScoll() {
            if(window.screenY >100){
                setIsSticky(true)
                console.log(isSticky)
            }else{
                setIsSticky(true)
                
            }
        }

        window.addEventListener('scroll', handleScoll);

        return () => {
            window.removeEventListener('scroll', handleScoll);
        }
    }, [])

    function handleClick() {
      setOpen(!open);
    }

  return (
    <>
    <nav>
        <div className=" flex justify-between items-center">
          <header className="header-logo p-2">
            <img src={logo.src} className="logo w-16 " alt="LogoIcon" />
          </header>

          <button onClick={handleClick} className="text-white toggle-button ">
            Menu
          </button>

          <ul
            id="primary-navigation"
            className={`primary-navigation 
          p-2 flex gap-4 text-slate-300 font-semibold
          ${open && "active"} 
          `}
          >
            <li>
              <Link
                className="px-2 py-2 hover:bg-slate-200 hover:text-black"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="px-2 py-2 hover:bg-slate-200 hover:text-black"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <a
                className="px-2 py-2 hover:bg-slate-200 hover:text-black"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="px-2 py-2 hover:bg-slate-200 hover:text-black"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

Css-> 
   Navbar 


.logo{
  
  z-index: 9999;
}

.toggle-button{
  display: none;
}
@media (max-width: 768px) {
  
  .primary-navigation{

    z-index: 999;

    position: absolute;
    right: 0;
    top: 60px;

    width: 0px;
    height: calc(100vh - 60px);
    transition: all 0.3s ease-in;
    overflow: hidden;

    flex-direction: column;
    gap:2em;
    
  
    padding:min(24vh, 5rem) 0em;
    
    background: hsl(0 0 100% / 0.1);
    backdrop-filter: blur(2rem);
    
  }

  .primary-navigation li {
    text-align: center;
  }

  .primary-navigation.active{
    width: 270px;
  }

  .toggle-button{
    display: block;
    z-index: 1;
    position: absolute;
    top:4%;
    right: 15%;

  }
} 
