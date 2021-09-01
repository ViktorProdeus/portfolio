import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Promo} from "./components/Promo/Promo";
import {Section, SectionPropsType} from "./components/Section/Section";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {LookingJob} from "./components/LookingJob/LookingJob";
import {Form} from "./components/Form/Form";
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    const sections: SectionPropsType[] = [
        {sectionClass: "section_dark", id: "promo", isTitleHidden: true, sectionTitle: "Promo", sectionComponent: Promo,},
        {sectionClass: "section_light", id: "skills", isTitleHidden: false, sectionTitle: "Skills", sectionComponent: Skills,},
        {sectionClass: "section_dark", id: "works", isTitleHidden: false, sectionTitle: "Works", sectionComponent: Works,},
        {sectionClass: "section_light", id: "lookingFor", isTitleHidden: true, sectionTitle: "Looking for a job", sectionComponent: LookingJob,},
        {sectionClass: "section_dark", id: "contacts", isTitleHidden: false, sectionTitle: "Contacts", sectionComponent: Form,},
    ];

    return (
        <div className="Portfolio">
            <h1 className="visually-hidden">Портфолио</h1>

            <Header/>
            {
                sections.map((s) => <Section
                    id={s.id}
                    key={s.id}
                    sectionClass={s.sectionClass}
                    isTitleHidden={s.isTitleHidden}
                    sectionTitle={s.sectionTitle}
                    sectionComponent={s.sectionComponent}/>)
            }
            <Footer/>
        </div>
    );
}

export default App;



