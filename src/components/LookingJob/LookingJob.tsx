import React from "react";
import s from "./LookingJob.module.css"
import Button from '@material-ui/core/Button';

export const LookingJob = () => {

    return (
        <div className={s.LookingJob}>
            <strong>I will consider your job offers!</strong>
            <Button className={s.button}  variant="contained">
                Hire me
            </Button>
        </div>
    );
};


