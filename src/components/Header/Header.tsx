import {NavLink} from "react-router-dom";
import React from "react";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.navigation}>
                    <ul className={`${s.navigationList} listReset`}>
                        <li>
                            <NavLink to="/Главная" activeClassName={s.active}>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Скиллы" activeClassName={s.active}>
                                Скиллы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Работы" activeClassName={s.active}>
                                Работы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="Контакты" activeClassName={s.active}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

