import React from 'react';
import style from '../styles/imageproject.module.css';
import { GoX } from "react-icons/go";

const ImageProject: React.FC<{ link: string, handleCloseWindowImage: Function }> = ({ link, handleCloseWindowImage }) => {

    return (
        <div className={style.container}>


            <div className={style.imagecontainer}>
                <div className={style.exitbuttoncontainer}>
                    <button onClick={()=> handleCloseWindowImage()}>
                        <GoX size={26} fill={"rgb(249,249,249)"} />
                    </button>
                </div>

                <div className={style.imageproject}>
                    <img src={link} alt="" />
                </div>

            </div>
        </div>
    )
}

export default ImageProject;