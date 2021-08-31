import {NavLink} from "react-router-dom";
import React from "react";
import s from "./Header.module.css";
import {AppBar, createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
           backgroundColor: theme.palette.background.default = "#111111"
        },
    }),
);

export const Header = () => {
    const classes = useStyles();
    return (

        <AppBar className={`${classes.appBar} ${s.header}`}>
            <div className="container">
                <nav className={s.navigation}>
                    <ul className={`${s.navigationList} listReset`}>
                        <li>
                            <NavLink to="main" activeClassName={s.active}>
                                Main
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Skills" activeClassName={s.active}>
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Works" activeClassName={s.active}>
                                Works
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Contacts" activeClassName={s.active}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </AppBar>
    );
}

