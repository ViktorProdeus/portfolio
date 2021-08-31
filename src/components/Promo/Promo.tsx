import React from "react";
import s from "./Promo.module.css"
import avatar from "../../assets/img/avatar.jpg"

export const Promo = () => {
    return (
        <div className={s.promo}>
            <div className={s.innerDescription}>
                <strong>Hi! <br/> My name's Viktar Pradzevus. I'm front-end developer</strong>
            </div>

            <div className={s.innerPhoto}>
                <img src={avatar} alt="avatar"/>
            </div>
        </div>
    );
};