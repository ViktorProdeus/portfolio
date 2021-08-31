import React from "react";
import s from "./Form.module.css"
import {AccentButton} from "../LookingJob/LookingJob";

export const Form = () => {

    return (
        <div className="container">
            <form className={s.contactsForm} action="#" method="post">
                <div className={`${s.formGroup} ${s.formGroup_name}`}>
                    <input type="text" className={s.formControl} name="name" placeholder="Name" required autoComplete="off"/>
                </div>

                <div className={`${s.formGroup} ${s.formGroup_email}`}>
                    <input type="email" className={s.formControl} name="email" placeholder="Email" required autoComplete="off"/>
                </div>

                <div className={`${s.formGroup} ${s.formGroup_message}`}>
                    <textarea className={s.formControl} name="message" placeholder="Your Message" required autoComplete="off"/>
                </div>

                <AccentButton className={s.formButton} type="submit" name="send">Send message</AccentButton>
            </form>
        </div>
    );
};


