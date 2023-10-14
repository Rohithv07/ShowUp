import { projects } from "../data";


function Project() {
  return (

    <section id="projects" className="project-bg font-italic" >
      <div className="flex flex-col w-full p-5 mb-20 container text-center" >
        <h1 className="dark-text" style={{paddingTop:'30px'}}>
          Projects
        </h1>
      </div>
      <div className="container" ><div className="row" >


        {projects.map((project) => (
          <div key={project.image} className="col text-left w-50">
            <div class="card-flip project-bg  col-lg-40 dark-text">
              <div class="flip">
                <div class="front">
                  <div class="card bg-styling-card text-white" style={{ height: "480px" }}>
                    <img class="card-img-top card-img" src={project.image} alt="100%x180" style={{ width: "100%", display: "block" }} data-holder-rendered="true" />
                    <br></br><br></br>
                    <div class="card-block text-center p-2">
                      <h5 class="card-title">{project.title}</h5>
                      <h6><p class="card-text">{project.subtitle}</p></h6>
                    </div>
                  </div>
                </div>
                <div class="back">
                  <div class="card bg-styling-card text-white text-left  " style={{ height: "480px", verticalAlign: "middle" }}>
                    <div class="card-block mb-4 p-4">
                      <br></br>
                      <h6 class="card-subtitle ">{project.description}</h6>
                    </div>
                    {/* <img src={project.image} alt="Image [100%x180]" data-holder-rendered="true" style={{ height: "180px", width: "100%", display: "block" }} /> */}
                    <div class="card-block p-4">
                      <p class="card-text">Used technologies:{project.Used_technologies}</p>
                    </div>
                  </div>
                </div>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        ))}
      </div>

      </div>

      <br></br><br></br><br></br>
    </section>






  );
}
export default Project;