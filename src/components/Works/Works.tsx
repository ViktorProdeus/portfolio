import React from "react";
import s from "./Works.module.css";
import smart from "../../assets/img/smart-device.jpg";
import fitness from "../../assets/img/supergym.jpg";
import socialNetwork from "../../assets/img/social.jpg";
import todoList from "../../assets/img/todolist.jpg";
import storybook from "../../assets/img/storybook.jpg";
import learningCards from "../../assets/img/learning-cards.jpg";
import films from "../../assets/img/films.jpg";
import counter from "../../assets/img/counter.jpg";
import forecast from "../../assets/img/forecast.jpg";
import cloneGithub from "../../assets/img/clone-github.jpg";
import { Fade } from "react-awesome-reveal";
import works from "../../data.json";

export const Works = () => {
    const images = [cloneGithub, forecast, smart, fitness, socialNetwork, todoList, storybook, learningCards, films, counter];

    return (
        <ul className={`${s.WorksList} listReset`}>
            {
                works.map((w, index) =>
                    (<Fade cascade={true} key={index} delay={200}>
                        <Work title={w.title} link={w.link}
                              description={w.description}
                              src={images[index]}
                              url={w.code_url}
                              alt={w.alt} />
                    </Fade>))
            }
        </ul>
    );
};

type WorkPropsType = {
    title: string
    description: string
    src: string
    alt: string
    link: string
    url: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <li className={s.WorksItem}>
            <div className={s.preview}>
                <img src={props.src} alt={props.alt} />

                <a href={props.link} rel="noreferrer" target={"_blank"} className={`button ${s.link}`}>Open</a>
            </div>

            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a className={s.code} href={props.url} rel="noreferrer" target={"_blank"}>source code</a>
        </li>
    );
};
