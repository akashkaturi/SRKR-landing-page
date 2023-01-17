import React from 'react'
import NavBar from '@/components/navbar'
import Footer from './footer'
import styles from '@/styles/Footer.module.css'

import { ThemeProvider } from 'styled-components';
const Layout = ({ children }: any) => {
    const theme = {
        colors: {
            heading: "rgb(24 24 29)",
            text: "rgb(24 24 29)",
            white: "#fff",
            black: " #212529",
            helper: "#8490ff",
            bg: "rgb(249 249 255)",
            footer_bg: "#0a1435",
            btn: "rgb(98 84 243)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient:
                "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: { mobile: "768px", tab: "998px" },
    };
    return (
        <div className={styles.layoutContainer}>
            <ThemeProvider theme={theme}>
                <NavBar />
                {children}
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default Layout