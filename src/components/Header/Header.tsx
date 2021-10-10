import React from "react";
import s from "./Header.module.css";
import { AppBar, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: theme.palette.background.default = "#111111"
        },
    }),
);

export const Header = () => {
    const classes = useStyles();

    const navlinks: {sectionID: string, title: string}[] = [
        {sectionID: "promo", title: "Main"},
        {sectionID: "skills", title: "Skills"},
        {sectionID: "works", title: "Works"},
        {sectionID: "contacts", title: "Contacts"},
    ];


    return <AppBar className={`${classes.appBar} ${s.header}`}>
        <div className="container">
            <nav className={s.navigation}>
                <ul className={`${s.navigationList} listReset`}>
                    {navlinks.map((link, index) => <li key={index}>
                        <Link
                            activeClass={s.active}
                            to={link.sectionID}
                            spy={true}
                            smooth={true}
                            offset={-58}
                            duration={500}
                          >
                            {link.title}
                        </Link>
                    </li>)}
                </ul>
            </nav>
        </div>
    </AppBar>;
}

