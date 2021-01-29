import React, { CSSProperties } from 'react';
import styled from 'styled-components';


const LanguageRender: React.FC<{ language: ILanguage }> = ({ language }) => {

    const HabilitiesBox = styled.div`
        width: 130px;
        height: 40px;
        border: 1px solid rgb(${language.red || 0}, ${language.green || 0}, ${language.blue || 0});
        border-radius: 5px;

        margin-left: auto;
        margin-left: auto;

        transition: background-color 100ms;

        &:hover {
            background-color: rgb(${language.red || 0}, ${language.green || 0}, ${language.blue || 0});
        }

        div {
            font-size: 1.1rem;
            line-height: 40px;
            text-align: center;
            align-items: center;

            color: rgb(249, 249, 249);
            font-weight: 300;

        }

        div:hover {
            color: ${language.red > 125 ||
            language.blue > 125 ||
            language.green > 125 ?
            "rgb(21, 21, 21)" :
            "rgb(249,249,249)"};
        }

    `;


    return (
        <HabilitiesBox>
            <div>
                {language.text}
            </div>
        </HabilitiesBox>
    )
}


export default LanguageRender;