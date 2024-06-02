import ProjectItem from "./ProjectItem"
import netflixImg from '../assets/netflix-img.png'
import spotifyImg from '../assets/spotify-img.jpg'
import tokopediaImg from '../assets/tokopedia-img.png'
import twitterImg from '../assets/twitter-img.jpeg'


function Projects(){
    return(
        <div id="projects" className="max-w-[1040px] m-auto flex flex-col items-center w-full h-screen">
            <h1 className="md:text-5xl text-4xl font-bold p-2 m-2">Projects</h1>
            <p className="md-text-3xl text-2xl text-center p-2">Berikut adalah beberapa Projects yang telah kubuat</p>
            <div className="grid grid-cols-2 gap-12">
                <ProjectItem img={netflixImg} titles={'Netflix app'}/>
                <ProjectItem img={spotifyImg} titles={'Spotify app'}/>
                <ProjectItem img={tokopediaImg} titles={'Tokopedia app'}/>
                <ProjectItem img={twitterImg} titles={'Twitter app'}/>
            </div>
        </div>
    )
}


export default Projects