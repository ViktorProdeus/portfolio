import React from "react";
import s from "./LookingJob.module.css"
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";

export const AccentButton = withStyles(() => ({
    root: {
        backgroundColor: "#b19777",
        '&:hover': {
            backgroundColor: "#b19777",
        },
    },
}))(Button);

export const LookingJob = () => {

    return (
        <div className={s.LookingJob}>
            <strong>I will consider your job offers!</strong>
            <AccentButton className={s.button} color="primary"  variant="contained">
                Hire me
            </AccentButton>
        </div>
    );
};


