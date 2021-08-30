import React from "react";
import s from "./Form.module.css"
import Button from '@material-ui/core/Button';

export const Form = () => {

    return (
        <div className={s.Form}>
            <form action="/" method="post">
                <div className={`${s.input} name`}>
                    <input name="name" id="name" placeholder="Имя" autoComplete="off"/>
                </div>

                <div className={`${s.input} phone`}>
                    <input name="phone" id="phone" placeholder="Телефон" autoComplete="off"/>
                </div>

                <div className={"textarea"}>
                    <textarea name="message" id="message" placeholder="Ваш вопрос" autoComplete="off"/>
                </div>

                <Button type={"submit"} className={s.button} variant="contained">
                    Отправить
                </Button>
            </form>
        </div>
    );
};


