import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Homepages/Intro";
import Jargon from "./components/Homepages/Jargon";
import Projects from "./components/Homepages/Project";
import Gallery from "./components/Homepages/Gallery";

function Homepages(){
    return(
        <>
        <Header/>
        <Intro/>
        <Jargon/>
        <Projects/>
        <Gallery/>
        <Footer/>
        </>
    );
}

export default Homepages