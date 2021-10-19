import React, { useState } from "react";
import s from "./Form.module.css"
import Button from "@material-ui/core/Button";
import { Fade } from "react-awesome-reveal";
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';

type StatusType = number | null;

export const Form = () => {
    const [status, setStatus] = useState<StatusType>(null);
    let timer: ReturnType<typeof setTimeout>;
    const sendEmail = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_fpp2rpj', 'template_era54du', e.target, 'user_t0wntrYjVHuZ3YFQlCLeV')
            .then((result) => {
                setStatus(result.status);
                e.target.reset();
            }, ((error) => {
                setStatus(error.status);
            }));
    };

    status !== null && (timer = setTimeout(()=> setStatus(null),4000))

    const alertHandler = () => {
        clearTimeout(timer)
        setStatus(null)
    }
    return (
        <div className="container contactsWrapper">
            <Fade delay={500}>
                <form className={s.contactsForm} onSubmit={sendEmail}>
                    <div className={`${s.formGroup} ${s.formGroup_name}`}>
                        <input type="text" className={s.formControl} name="name" placeholder="Name"
                               autoComplete="off" required />
                    </div>

                    <div className={`${s.formGroup} ${s.formGroup_email}`}>
                        <input type="email" className={s.formControl} name="email" placeholder="Email"
                               autoComplete="off" required />
                    </div>

                    <div className={`${s.formGroup} ${s.formGroup_message}`}>
                        <textarea className={s.formControl} name="message" placeholder="Your Message"
                                  autoComplete="off" required />
                    </div>

                    <Button className={s.formButton} type="submit" name="send" disabled={status === 200 || status === 0}>Send message</Button>
                </form>
            </Fade>

            {status === 200 &&
            <Alert className={s.alert} onClose={alertHandler}><b>success</b> — email sent, Thank you!</Alert>}
            {status === 0 &&
            <Alert severity="error" className={s.alert} onClose={alertHandler}><b>error</b> — email not sent, try again!</Alert>}
        </div>
    );
};


