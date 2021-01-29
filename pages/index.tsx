import Head from 'next/head';
import AboutMe from './components/aboutme';
import Habilities from './components/habilities';
import Projects from './components/projects';
import style from '../styles/index.module.css';



export default function Home() {
    return (
        <div className="App">
            <Head>
                <title>Lucas Rosate</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500&family=Source+Code+Pro:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>

            <main className={style.container}>
                    <AboutMe />
                    <div className="border-div"/>
                    <Habilities />
                    <div className="border-div"/>
                    <Projects />
            </main>

            <footer></footer>
        </div>
    )
}
