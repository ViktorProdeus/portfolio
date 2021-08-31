import React from "react";
import s from "./Works.module.css";
import smart from "../../assets/img/smart-device.jpg"
import fitness from "../../assets/img/supergym.jpg"

export const Works = () => {
    const works: WorkPropsType[] = [
        {
            title: "Smart-device",
            description: "Html, SCSS, gulp - project",
            src: `${smart}`,
            alt: "Smart-device",
            link: "https://viktorprodeus.github.io/smart-device/build/",
        },
        {
            title: "Fitness",
            description: "Html, SCSS, gulp - project",
            src: `${fitness}`,
            alt: "Fitness",
            link: "https://viktorprodeus.github.io/fitness/build/",
        },
    ];

    return (
        <ul className={`${s.WorksList} listReset`}>
            {works.map((w, index) => <Work key={index} title={w.title} link={w.link} description={w.description} src={w.src}
                                           alt={w.alt}/>)}
        </ul>
    );
};

type WorkPropsType = {
    title: string
    description: string
    src: string
    alt: string
    link: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <li className={s.WorksItem}>
            {<div className={s.preview}>

                <img src={props.src} alt={props.alt}/>

                <a href={props.link} rel="noreferrer" target={"_blank"} className={`button ${s.link}`}>Open</a>
            </div>}

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
};
