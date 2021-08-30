import React from "react";
import s from "./LookingJob.module.css"
import Button from '@material-ui/core/Button';

export const LookingJob = () => {

    return (
        <div className={s.LookingJob}>
            <strong>Рассмотриваю ваши предложения о работе</strong>

            <Button className={s.button}  variant="contained">
                Нанять меня
            </Button>
        </div>
    );
};


