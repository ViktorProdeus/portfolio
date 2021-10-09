import React, { FC } from "react";
import { Fade } from 'react-awesome-reveal'

export type SectionPropsType = {
    id: string
    sectionClass: string
    isTitleHidden?: boolean
    sectionTitle: string
    sectionComponent: FC
}
export const Section = (props: SectionPropsType) => {
    return (
        <section id={props.id} className={`section ${props.sectionClass}`}>
            <div className="container">
                {props.isTitleHidden ?
                    <h2 className="visually-hidden">{props.sectionTitle}</h2> :
                    <Fade delay={200}><h2>{props.sectionTitle}</h2></Fade>
                }

                {<props.sectionComponent />}
            </div>
        </section>
    );
};