import React from 'react';
import style from '../styles/aboutme.module.css';

import github from '../assets/github.svg';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';

const accessLinks = [
    {
        src: github,
        href: "https://github.com/lucasrosate",
        alt: "github"
    },

    {
        src: email,
        href: "mailto:lucas.rosate@hotmail.com",
        alt: "email"
    },

    {
        src: linkedin,
        href: "https://www.linkedin.com/in/lucasrosate/",
        alt: "linkedin"
    }
]


const AboutMe: React.FC = () => {
    return (
        <div className={style.container}>
            <h1>
                {`<Lucas Rosate/>`}
            </h1>

            <div className={style.landingLayout}>
                <div className={style.landingText}>
                    <h3>
                        Olá, meu nome é Lucas Rosate
                        </h3>

                    <h4>
                        Sou estudante de engenharia fascinado por programação.
                        No tempo livre sempre busco estudar temas majoritariamente relacionados à esse ramo.
                        </h4>
                </div>

                <div>
                    <div className={style.profileImage}>
                        <img
                            src="https://avatars.githubusercontent.com/u/68343742?s=460&u=7818fcba2f09ea226a2847623f06d524d6674212&v=4"
                            alt=""
                        />
                    </div>
                    <div className={style.contacts}>
                        {
                            accessLinks.map(
                                (accessLink) =>
                                    <a href={accessLink.href}>
                                        <img src={accessLink.src} alt={accessLink.alt} />
                                    </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;