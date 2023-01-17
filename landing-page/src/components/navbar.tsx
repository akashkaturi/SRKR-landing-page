import React, { useState } from "react";
import Link from "next/link";
import navStyles from '@/styles/Navbar.module.css'
import next from "next";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className={navStyles.navbar}>
                <div className={navStyles.navContainer}>
                    <Link href="/" className={navStyles.navLogo}>
                        SRKR
                        <i className={navStyles.faCode}></i>
                    </Link>

                    <ul className={click ? `${navStyles.navMenu} active` : `${navStyles.navMenu}`}>
                        <li className={navStyles.navItem}>
                            <Link href="/" className={navStyles.navLinks} onClick={handleClick}>
                                Home
                            </Link>
                        </li>
                        <li className={navStyles.navItem}>
                            <Link href="/about" className={navStyles.navLinks} onClick={handleClick}>
                                About
                            </Link>
                        </li>
                        <li className={navStyles.navItem}>
                            <Link href="/events" className={navStyles.navLinks} onClick={handleClick}>
                                Events
                            </Link>
                        </li>
                        <li className={navStyles.navItem}>
                            <Link
                                href="/contact_us"
                                className={navStyles.navLinks}
                                onClick={handleClick}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className={navStyles.navIcon} onClick={handleClick}>
                        <i className={click ? `fas ${navStyles.faTimes} ` : `fas ${navStyles.faBars}`}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
