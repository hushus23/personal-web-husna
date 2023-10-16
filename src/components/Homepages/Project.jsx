function Projects(){
    return(
        <>
        <section class="projecttitle">
        <h1>my project</h1>
    </section>
    <section class="project">
        <div class="projectcontainer">
            <div class="prjcard">
                <img src="src\assets\images\keik.png"/>
                <div class="prjdesc">
                <h4><a href="/pages/contentkeik.html">Keik</a></h4>
                <p>Delivery service cake shop</p>
                </div>
            </div>
            <div class="prjcard">
                <img src="src\assets\images\fitfood.png"/>
                <div class="prjdesc">
                <h4><a href="/pages/content.html">Fitfood</a></h4>
                <p>Restaurant nutrition calculator</p>
                </div>
            </div>
            <div class="prjcard">
                <img src="src\assets\images\travin.png"/>
                <div class="prjdesc">
                <h4><a href="/pages/content.html">Travin</a></h4>
                <p>Tracking personal and group financial</p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Projects