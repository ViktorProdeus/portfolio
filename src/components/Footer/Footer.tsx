import React from "react";
import s from "./Footer.module.css";
import {Social} from "../Social/Social";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.footerInner}`}>
                <h2>Viktar Pradzevus</h2>

                <Social/>

                <div className={s.copyRight}>
                    &copy; 2021 All Right Reserved
                </div>
            </div>
        </footer>
    );
}


export default Footer;