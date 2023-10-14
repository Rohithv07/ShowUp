import { skills } from "../data";
import { licenses } from "../data";

function Skills() {
    return (
        <section id="skills" >
            <div className="skills-bg font-italic" style={{ paddingBottom: '50px',paddingTop:'30px' }}>
                <div className="container">
                    <div className="text-center " style={{ paddingBottom: '25px' }}>
                        <br></br>
                        <br></br>
                        <h1 className="sm:text-4xl text-3xl font-medium title-font dark-text mb-4">
                            Skills &amp; Technologies
                        </h1>

                    </div>


                    <div className="row">
                        <div className="col text-left w-50" >
                            {skills.map((skill) => (

                                <div key={skill} >
                                    <div class="progress progress-bar-cust" >
                                        <div class="progress-bar-background " role="progressbar" style={{ width: skill.percentage }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{skill.percentage}</div>

                                    </div>

                                    <h6 style={{ paddingBottom: "10px" }}>{skill.name}</h6>
                                </div>


                            ))}
                        </div>

                        <div className="col text-left w-50" style={{ paddingTop: '100px' }}>
                            <h6>Technical skills are the abilities and knowledge needed to perform specific tasks. They are practical, and often relate to mechanical, information technology, mathematical, or scientific tasks.</h6>
                        </div>


                    </div>
                    <div className="container">
                        <div className="text-center ">
                            <br></br>
                            <br></br>
                            <h1 className="sm:text-4xl text-3xl font-medium title-font dark-text mb-4">
                                Licenses &amp; certifications
                            </h1>

                        </div>
                        <div class="row">

                            <div className="col text-left w-50" style={{ paddingTop: '90px' }}>
                                <h6>Licenses and certifications show that a person has the specific knowledge or skill needed to do a job. They are credentials that prove you've acquired competencies, developed skills, and gained knowledge required to a specific job.</h6>
                            </div>
                            <div class="col text-left w-50 " >
                                {licenses.map((license) => (

                                    <div key={license} className="text-center md-5 p-1" >

                                        <div class=" card text-white bg-styling-card mb-1" >
                                            <div class="card-body " width="10px" height="10px">
                                                Name: {license.name}
                                                <br></br>
                                                Organisation:{license.org}
                                                <br></br>
                                                Issued On:{license.on}
                                            </div>

                                        </div>
                                    </div>



                                ))}
                            </div>

                            {/* <div className="col allign-right">
                            <div className="text-center ">
                                {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
                            {/* <br></br>
                                <br></br>
                                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                                    Languages
                                </h1>

                            </div>
                            <div class="row d-flex justify-content-center" >
                                {languages.map((language) => (

                                    <div key={language} className="w-27 m-2" >

                                        <div class="card text-center text-white bg-success mb-3" >
                                            <div class="card-body" width="140px" height="90px">
                                                {language}
                                            </div>

                                        </div>
                                    </div>


                                ))}
                            </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}






export default Skills;