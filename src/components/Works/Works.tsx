import React from "react";
import s from "./Works.module.css";
import smart from "../../assets/img/smart-device.jpg";
import fitness from "../../assets/img/supergym.jpg";
import socialNetwork from "../../assets/img/social.jpg";
import todoList from "../../assets/img/todolist.jpg";
import storybook from "../../assets/img/storybook.jpg";

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
        {
            title: "Social-Network",
            description: "React, Redux, Typescript - project",
            src: `${socialNetwork}`,
            alt: "Social-Network",
            link: "https://viktorprodeus.github.io/social-network",
        },
        {
            title: "TodoList",
            description: "React, Redux, Typescript, Material UI - project",
            src: `${todoList}`,
            alt: "TodoList",
            link: "https://viktorprodeus.github.io/todolist/",
        },
        {
            title: "Storybook",
            description: "React, Redux, Typescript, Testing - project",
            src: `${storybook}`,
            alt: "Storybook",
            link: "https://60d1b9ea4b2706004963b862-cphfjpplqm.chromatic.com/?path=/story/onoff-stories--on-mode&globals=measureEnabled:false",
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
