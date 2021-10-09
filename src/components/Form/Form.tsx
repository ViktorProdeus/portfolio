import React from "react";
import s from "./Form.module.css"
import Button from "@material-ui/core/Button";
import { Fade } from "react-awesome-reveal";

export const Form = () => {

    return (
        <div className="container">
            <Fade delay={500}>
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

                    <Button className={s.formButton} type="submit" name="send">Send message</Button>
                </form>
            </Fade>
        </div>
    );
};


