'use client'
import { useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';

const CustomNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true); 
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY,handleScroll]);

  return (
    <>
      <Navbar
        fluid
        rounded
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <Navbar.Brand as={Link} href="/">
          <Image src="/vercel.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" height={24} width={24} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#HomeSection" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#AboutSection">
            About
          </Navbar.Link>
          <Navbar.Link href="#ProductSection">Product</Navbar.Link>
          <Navbar.Link href="#TeamSection">Team</Navbar.Link>
          <Navbar.Link href="#ContactSection">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  </>
  );
};

export default CustomNavbar;
