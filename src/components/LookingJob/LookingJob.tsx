import React from "react";
import s from "./LookingJob.module.css"
import Button from '@material-ui/core/Button';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";


export const LookingJob = () => {

    return (
        <Fade delay={300}>
            <div className={s.LookingJob}>
                <strong>I will consider your job offers!</strong>
                <Button
                    component={Link as any}
                    className={s.button}
                    variant="contained"
                    to={"contacts"}
                    spy={true}
                    smooth={true}
                    offset={-58}
                    duration={500}
                >
                    Hire me
                </Button>
            </div>
        </Fade>
    );
};


