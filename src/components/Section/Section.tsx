import React, {FC} from "react";

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
                    <h2 className="visually-hidden">{props.sectionTitle}</h2> : <h2>{props.sectionTitle}</h2>
                }

                {<props.sectionComponent/>}
            </div>
        </section>
    );
};