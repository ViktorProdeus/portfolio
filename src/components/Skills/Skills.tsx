import React from "react";
import s from "./Skills.module.css"
import {DiJavascript, GrReactjs, IoLogoCss3, SiTypescript, TiHtml5} from "react-icons/all";
import {IconType} from "react-icons/lib";

export const Skills = () => {
    const skills: SkillPropsType[] = [
        {title: "React", description: "Подробное описание навыка", colorIcon: "skyblue", iconComponent: GrReactjs,},
        {title: "JS", description: "Подробное описание навыка", colorIcon: "black", iconComponent: DiJavascript,},
        {title: "Typescript", description: "Подробное описание навыка", colorIcon: "gold", iconComponent: SiTypescript,},
        {title: "HTML", description: "Подробное описание навыка", colorIcon: "red", iconComponent: TiHtml5,},
        {title: "CSS", description: "Подробное описание навыка", colorIcon: "blue", iconComponent: IoLogoCss3,},
    ];

    return (
        <ul className={`${s.SkillsList} listReset`}>
            {skills.map((sk, index) => <Skill key={index} title={sk.title} description={sk.description} colorIcon={sk.colorIcon} iconComponent={sk.iconComponent}/>)}
        </ul>
    );
};

type SkillPropsType = {
    title: string
    description: string
    colorIcon?: string
    sizeIcon?: string
    iconComponent: IconType
}

export const Skill = (props: SkillPropsType) => {
    return (
        <li className={s.SkillsItem}>
            {<props.iconComponent size={"6em"} color={props.colorIcon}/>}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
};
