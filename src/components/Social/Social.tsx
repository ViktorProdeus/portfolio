import s from "./Social.module.css";
import React from "react";
import {AiFillFacebook, FaTelegramPlane, GoMarkGithub, SiLinkedin} from "react-icons/all";
import {IconType} from "react-icons/lib";

type IconItemType = {
    title: string,
    component: IconType
    link: string
}
export const Social = () => {
    const icons: IconItemType[] = [
        {title: "Facebook", component: AiFillFacebook, link: "https://www.facebook.com/ViktarProdzevus",},
        {title: "Telegram", component: FaTelegramPlane, link: "https://t.me/Pradzevus_Viktar",},
        {title: "Github", component: GoMarkGithub, link: "https://github.com/ViktorProdeus",},
        {title: "Linkedin", component: SiLinkedin, link: "https://www.linkedin.com/in/viktor-prodeus-b54b7913a",},
    ];

    return (
        <ul className={`${s.Social} listReset`}>
            {
                icons.map((icon, i) => <li key={i}>
                    <a href={icon.link} target={"_blank"} rel="noreferrer" className={s.linkIcon}>
                        Facebook <icon.component size={"30px"} color={"inherit"}/>
                    </a>
                </li>)
            }

        </ul>
    );
};