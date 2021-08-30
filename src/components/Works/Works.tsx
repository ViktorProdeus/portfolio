import React from "react";
import s from "./Works.module.css"

export const Works = () => {
    const works: WorkPropsType[] = [
        {
            title: "Проект",
            description: "Краткое описание",
            src: "https://via.placeholder.com/150X150",
            alt: "project",
        },
        {
            title: "Проект",
            description: "Краткое описание",
            src: "https://via.placeholder.com/150X150",
            alt: "project",
        },
    ];

    return (
        <ul className={`${s.WorksList} listReset`}>
            {works.map((w, index) => <Work key={index} title={w.title} description={w.description} src={w.src}
                                           alt={w.alt}/>)}
        </ul>
    );
};

type WorkPropsType = {
    title: string
    description: string
    src: string
    alt: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <li className={s.WorksItem}>
            {<div className={s.preview}>

                <img src={props.src} alt={props.alt}/>

                <a href="/#" target={"_blank"} className={`button ${s.link}`}>Посмотреть</a>
            </div>}

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
};
