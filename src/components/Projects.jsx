import Project from "./Project";

function Projects() {
    let numberOfProjects = 6;
    return (
        <section className="projects">
            <h2>My work</h2>
            <div className="container">
                {[...Array(numberOfProjects)].map((x) => <Project/>)}
            </div>
        </section>
    )
}

export default Projects;