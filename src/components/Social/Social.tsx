import s from "./Social.module.css";
import React from "react";
import {AiFillFacebook, FaTelegramPlane, GoMarkGithub, SiLinkedin} from "react-icons/all";
import {IconType} from "react-icons/lib";

type IconItemType = {
    title: string,
    component: IconType
}
export const Social = () => {
    const icons: IconItemType[] = [
        {title: "Facebook", component: AiFillFacebook},
        {title: "Telegram", component: FaTelegramPlane},
        {title: "Github", component: GoMarkGithub},
        {title: "Linkedin", component: SiLinkedin},
    ];

    return (
        <ul className={`${s.Social} listReset`}>
            {
                icons.map((icon, i) => <li key={i}>
                    <a href="/#" target={"_blank"} className={s.linkIcon}>
                        Facebook <icon.component size={"30px"} color={"inherit"}/>
                    </a>
                </li>)
            }

        </ul>
    );
};