import React from 'react';
import style from '../styles/projects.module.css';
import githubAccess from '../assets/githubAccess.svg';
import ImageProject from './imageproject';


const projects: Array<IProject> = [
    {
        title: "4life",
        images: ["https://i.imgur.com/8e0ltt7.png", "https://i.imgur.com/hiNNAGg.png", "https://i.imgur.com/GG6sfQf.png", "https://i.imgur.com/zMIOsni.png"],
        description: "A ideia era criar um app para organizar tarefas, a vida financeira e também para cuidar da alimentação.",
        technologies: ["React.js", "Express.js", "Node.JS", "Dropbox SDK", "MongoDB"],
        accessLink: "https://github.com/lucasrosate/4life_app",
    },
    {
        title: "get-random-quotes",
        images: [],
        description: "CLI criado para gerar citações feitas por artistas com a opção de gerar e salvar em um banco de dados MySQL.",
        technologies: ["Node.js", "MySQL", "CLI"],
        accessLink: "https://github.com/lucasrosate/get-random-quotes",
    },
    {
        title: "Fetch randomuser api",
        images: ["https://i.imgur.com/UHfrl4c.png"],
        description: "Esse app accessa uma api e gera uma page com o usuário resultante.",
        technologies: ["Next.js", "Redux", "Axios", "map-gl"],
        accessLink: "https://github.com/lucasrosate/fetch-randomuserapi-app",
    },
    {
        title: "React sudoku",
        images: ["https://i.imgur.com/eXJ2sgE.png"],
        description: "Jogo Sudoku criado em react.",
        technologies: ["React.js"],
        accessLink: "https://github.com/lucasrosate/react-sudoku",
    },

    {
        title: "Spark",
        images: ["https://i.imgur.com/soRWjZh.png", "https://i.imgur.com/4N350d0.png", "https://i.imgur.com/4N350d0.png"],
        description: "Site criado para a publicação de artigos e interação entre os usuários.",
        technologies: ["Django", "jQuery", "SQLite"],
        accessLink: "https://github.com/lucasrosate/spark_article",
    },

]



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
                                <div />
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
                                        <div>
                                            <img src={imageSrc}
                                                key={imageId}
                                                onClick={() => showImageFullSize(projectID, imageId)} />
                                        </div>
                                    )}
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