import React from "react";
import s from "./Promo.module.css"

export const Promo = () => {
    return (
        <div className={s.promo}>
            <div className={s.innerDescription}>
                <strong>Привет! <br/> Меня зовут Виктор Продеус. Я front-end разработчик</strong>
            </div>

            <div className={s.innerPhoto}>
                <img src="https://via.placeholder.com/300X400.png" width={300} height={400} alt="ava"/>
            </div>
        </div>
    );
};