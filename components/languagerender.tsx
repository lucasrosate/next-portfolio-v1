import React, { CSSProperties } from 'react';
import styled from 'styled-components';


interface HabilitiesBoxProps {
    backgroundColor: string,
    textColor: string,
}

const HabilitiesBox = styled.div<HabilitiesBoxProps>`
width: 130px;
height: 40px;
border: 1px solid ${props => props.backgroundColor};
border-radius: 5px;

margin-left: auto;
margin-left: auto;

transition: background-color 100ms;

&:hover {
    background-color: ${props => props.backgroundColor};
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
    color: ${props=> props.textColor}
}

`;




const LanguageRender: React.FC<{ language: ILanguage }> = ({ language }) => {
    const backgroundColor = `rgb(${language.red}, ${language.green}, ${language.blue})`

    const textColor =
            language.red > 125 ||
            language.blue > 125 ||
            language.green > 125 ?
            "rgb(21, 21, 21)" :
            "rgb(249,249,249)"


    return (
        <HabilitiesBox backgroundColor={backgroundColor} textColor={textColor}>
            <div>
                {language.text}
            </div>
        </HabilitiesBox>
    )
}


export default LanguageRender;