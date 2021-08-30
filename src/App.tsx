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
        {sectionClass: "section_pink", isTitleHidden: true, sectionTitle: "Промо", sectionComponent: Promo,},
        {sectionClass: "section_green", isTitleHidden: false, sectionTitle: "Скиллы", sectionComponent: Skills,},
        {sectionClass: "section_purple", isTitleHidden: false, sectionTitle: "Мои работы", sectionComponent: Works,},
        {sectionClass: "section_burlywood", isTitleHidden: true, sectionTitle: "Ищу работу", sectionComponent: LookingJob,},
        {sectionClass: "section_pink", isTitleHidden: false, sectionTitle: "Контакты", sectionComponent: Form,},
    ];

    return (
        <div className="Portfolio">
            <h1 className="visually-hidden">Портфолио</h1>

            <Header/>
            {
                sections.map((s, index) => <Section
                    key={index}
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



