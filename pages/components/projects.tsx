import React from 'react';
import projects from '../files/projects';
import style from '../../styles/projects.module.css';
import githubAccess from '../assets/githubAccess.svg';
import ImageProject from './imageproject';

const Projects: React.FC = () => {
    var [currentLink, setCurrentLink] = React.useState("");
    var [windowVisible, setWindowVisible] = React.useState(false);

    const showImageFullSize = (projectId: number, imageId: number) => {
        setCurrentLink(projects[projectId].images[imageId]);
        setWindowVisible(true);
    }

    const handleCloseWindowImage = () => setWindowVisible(false);

    return (
        <div className={style.container}>
            <div className={style.projectscontainer}>
                <h1>
                    Projetos
                </h1>
                {windowVisible ? <ImageProject link={currentLink} handleCloseWindowImage={handleCloseWindowImage} /> : null}
                {
                    projects.map((project, projectID) =>

                        <div className={style.projectsbox}>
                            <h2>{project.title}</h2>

                            <div className={style.layoutbox}>
                                <div>
                                    {project.description}
                                </div>

                                <div>
                                    {
                                        project.technologies.map((techonology, index) =>
                                            <span key={index}>
                                                {techonology}
                                                {index === project.technologies.length - 1 ? "." : ", "}
                                            </span>)
                                    }
                                </div>
                            </div>

                            <div className={style.projectdetailsbox}>
                                <div className={style.projectimages}>
                                    {project.images.map((imageSrc, imageId) =>
                                        <img src={imageSrc}
                                            key={imageId}
                                            onClick={() => showImageFullSize(projectID, imageId)} />)}
                                </div>

                                <div className={style.githubAccess}>
                                    <a href={project.accessLink}>
                                        <img src={githubAccess} alt="github-logo" />
                                    </a>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    )
}

export default Projects;