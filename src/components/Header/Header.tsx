import React from "react";
import s from "./Header.module.css";
import {AppBar, createStyles, makeStyles, Theme} from "@material-ui/core";
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: theme.palette.background.default = "#111111"
        },
    }),
);

export const Header = () => {
    const classes = useStyles();

    const scrollToSection = (e: any) => {
        e.preventDefault();
        const target = e.target.getAttribute("href")
        gsap.to(window, {duration: 1, scrollTo: {y: target, offsetY: 50}});
    }

    const navlinks: {id: number, href: string, title: string}[] = [
        {id: 1, href: "#promo", title: "Main"},
        {id: 2, href: "#skills", title: "Skills"},
        {id: 3, href: "#works", title: "Works"},
        {id: 4, href: "#contacts", title: "Contacts"},
    ];


    return <AppBar className={`${classes.appBar} ${s.header}`}>
        <div className="container">
            <nav className={s.navigation}>
                <ul className={`${s.navigationList} listReset`}>
                    {navlinks.map(link => <li key={link.id}>
                        <a href={link.href} rel="noreferrer" onClick={
                            scrollToSection
                        }>
                            {link.title}
                        </a>
                    </li>)}
                </ul>
            </nav>
        </div>
    </AppBar>;
}

