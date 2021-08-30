import React from "react";
import s from "./Footer.module.css";
import {Social} from "../Social/Social";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.footerInner}`}>
                <h2>Виктор Продеус</h2>

                <Social/>

                <div className={s.copyRight}>
                    &copy; 2021 Все права защищены
                </div>
            </div>
        </footer>
    );
}


export default Footer;