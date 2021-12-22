import React from "react";
import s from "./Promo.module.css"
import avatar from "../../assets/img/avatar.jpg"
import Particles from "react-tsparticles";
import { Fade } from 'react-awesome-reveal'
import { ISourceOptions } from "tsparticles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Promo = () => {
    const options = {
        fpsLimit: 90,
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "star",
            },
            size: {
                random: false,
                value: 3,
            },
        },
        detectRetina: true,
    } as ISourceOptions

    return (
        <>
            <Particles
                className={s.particles}
                options={options}
            />

            <div className={s.promo}>

                <div className={s.innerDescription}>
                    <Typewriter
                        options={{
                            strings: ["Hello!", "My name's Viktar Pradzevus", "I'm front-end developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <Fade className={s.fadeWrapper} duration={3500}>
                    <Tilt>
                        <div className={s.innerPhoto}>
                            <img src={avatar} alt="avatar" />
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </>

    );
};