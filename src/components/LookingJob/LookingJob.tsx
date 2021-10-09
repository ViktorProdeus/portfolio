import React from "react";
import s from "./LookingJob.module.css"
import Button from '@material-ui/core/Button';
import { Fade } from "react-awesome-reveal";

export const LookingJob = () => {

    return (
        <Fade delay={300}>
            <div className={s.LookingJob}>
                <strong>I will consider your job offers!</strong>
                <Button className={s.button} variant="contained">
                    Hire me
                </Button>
            </div>
        </Fade>
    );
};


