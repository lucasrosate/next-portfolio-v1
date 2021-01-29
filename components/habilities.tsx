import React from 'react';

import LanguageRender from './languagerender';
import style from '../styles/habilities.module.css';

const languages: ILanguage[] = [
    // <code>React, Node.js, Django, Python, Typescript, Javascript, .NET, MySQL,MongoDB, SQLite e HTML/CSS.</code>

    {
        text: "Next.js",
        description: "",
        red: 74,
        green: 233,
        blue: 100

    },
    {
        text: "React.js",
        description: "",
        red: 74,
        green: 213,
        blue: 255

    },
    {
        text: "Typescript",
        description: "",
        red: 0,
        green: 122,
        blue: 204

    },
    {
        text: "Python",
        description: "",
        red: 146,
        green: 184,
        blue: 19

    },
    {
        text: "Django",
        description: "",
        red: 9,
        green: 45,
        blue: 31

    },
    {
        text: "Node.js",
        description: "",
        red: 111,
        green: 188,
        blue: 78

    },

    {
        text: "MongoDB",
        description: "",
        red: 71,
        green: 71,
        blue: 73

    },
    {
        text: "MySQL",
        description: "",
        red: 227,
        green: 117,
        blue: 44

    },
    {
        text: "Javascript",
        description: "",
        red: 247,
        green: 223,
        blue: 30

    },
    {
        text: "SQLite",
        description: "",
        red: 0,
        green: 59,
        blue: 87

    },
    {
        text: "HTML/CSS",
        description: "",
        red: 73,
        green: 73,
        blue: 73

    },
    {
        text: "jQuery",
        description: "",
        red: 150,
        green: 85,
        blue: 70

    },
    
]

const Habilities: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.layoutboxcontainer}>
                <h1>Habilidades</h1>

                <div className={style.languagecontainer}>
                    {
                        languages.map((language, key) =>
                            <span key={key}>
                                <LanguageRender language={language} />
                            </span>)
                    }
                </div>
            </div>

        </div>
    )
}


export default Habilities;