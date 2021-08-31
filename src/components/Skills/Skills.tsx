import React from "react";
import s from "./Skills.module.css"
import {DiJavascript, GrReactjs, IoLogoCss3, SiTypescript, TiHtml5} from "react-icons/all";
import {IconType} from "react-icons/lib";
import {Card} from "@material-ui/core";

export const Skills = () => {
    const skills: SkillPropsType[] = [
        {title: "React", description: "Подробное описание навыка", colorIcon: "#b19777", iconComponent: GrReactjs,},
        {title: "JS", description: "Подробное описание навыка", colorIcon: "#b19777", iconComponent: DiJavascript,},
        {title: "Typescript", description: "Подробное описание навыка", colorIcon: "#b19777", iconComponent: SiTypescript,},
        {title: "HTML", description: "Подробное описание навыка", colorIcon: "#b19777", iconComponent: TiHtml5,},
        {title: "CSS", description: "Подробное описание навыка", colorIcon: "#b19777", iconComponent: IoLogoCss3,},
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
        <li>
            <Card className={s.SkillsItem}>
                <div className={s.iconWrap}>
                    {<props.iconComponent size={"3em"} color={props.colorIcon}/>}
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Card>
        </li>
    );
};
