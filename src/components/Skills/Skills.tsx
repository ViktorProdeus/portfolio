import React from "react";
import s from "./Skills.module.css"
import {
    DiJavascript,
    FaServer,
    GrReactjs,
    ImDatabase,
    IoLogoCss3,
    SiJest,
    SiRedux,
    SiTypescript,
    TiHtml5
} from "react-icons/all";
import { IconType } from "react-icons/lib";
import { Card } from "@material-ui/core";
import { Fade } from 'react-awesome-reveal';

export const Skills = () => {
    const skills: SkillPropsType[] = [
        {title: "React", description: "Ui layer", iconComponent: GrReactjs,},
        {title: "Redux", description: "BLL layer", iconComponent: SiRedux,},
        {title: "JS", description: "JS Programming language", iconComponent: DiJavascript,},
        {title: "Typescript", description: "TS Programming language", iconComponent: SiTypescript,},
        {title: "HTML", description: "Hypertext markup language", iconComponent: TiHtml5,},
        {title: "CSS", description: "Cascading style sheets", iconComponent: IoLogoCss3,},
        {title: "AXIOS", description: "DALL layer actions with Server", iconComponent: FaServer,},
        {title: "UNIT TESTING", description: "Writing tests for the application", iconComponent: SiJest,},
        {title: "FIREBASE", description: "Database", iconComponent: ImDatabase,},
    ];

    return (
        <ul className={`${s.SkillsList} listReset`}>
            {skills.map((sk, index) => <Skill key={index} title={sk.title} description={sk.description}
                                              iconComponent={sk.iconComponent} />)}
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
            <Fade delay={200}>
                <Card className={s.SkillsItem}>
                    <div className={s.iconWrap}>
                        {<props.iconComponent size={"3em"} color={props.colorIcon} />}
                    </div>

                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </Card>
            </Fade>
        </li>
    );
};
