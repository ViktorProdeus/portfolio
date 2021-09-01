import React, {useEffect, useRef} from "react";
import s from "./Promo.module.css"
import avatar from "../../assets/img/avatar.jpg"
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


export const Promo = () => {

    let textItem: any = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.to(textItem, {
            text: {value: "Hello! My name's Viktar Pradzevus. I'm front-end developer"},
            duration: 6,
            delay: 1,
            ease: "none",
        });
    }, [textItem])

    return (
        <div className={s.promo}>
            <div className={s.innerDescription}>
                <strong
                    ref={(el) => {
                        textItem = el
                    }}
                />
            </div>

            <div className={s.innerPhoto}>
                <img src={avatar} alt="avatar"/>
            </div>
        </div>
    );
};