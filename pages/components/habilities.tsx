import React from 'react';

import LanguageRender from './languagerender';
import languages from '../files/languages';
import style from '../../styles/habilities.module.css';

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