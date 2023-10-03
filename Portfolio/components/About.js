import React from "react";
import { useState, useEffect } from "react";

function About() {

  const [text0, setText0] = useState("");

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const words = [
    "As a software developer, " +
    "I have over 1 year of experience working in a SCRUM environment on various java based projects.I have had a " +
    "3 month internship experience at Indian space research organisation (ISRO) and have worked as associate " +
    "software engineer at Incture technologies for over 1 year on java and SAP based technologies.I am currently working as an " +
    "application developer 2 at Oracle."
  ];

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex >= words[index].length + 1) {
      setSubIndex(0);
      setIndex((prev) => prev + 1);


      return;
    }

    if (subIndex <= words[index].length + 1) {
      setTimeout(() => {
        setSubIndex((prev) => prev + 1);
        if (index === 0) {
          setText0(words[index].substring(0, subIndex));
        }
      }, 150);
    }
  }, [subIndex]);


  return (
    <section id="about">
      <div className="bg-styling font-italic">
        <div className="container" height="100%" >
          <div class="row">
            <div className="col text-left w-50" style={{ paddingTop: '250px' }}>

              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">

                Hi, I'm Priya Prasad.

              </h1>
              <h3>
                <div className="hidden lg:inline-block text-white" style={{ paddingBottom: '20px' }} >Application developer | Oracle </div>
              </h3>

              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/priya-prasad-96a73b184/" target="_blank"
                  className="btn button my-2 my-sm-0">
                  LinkedIn
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://drive.google.com/file/d/1OsuyRBsk2hC-G8p5FNqek1U3pPvJagYH/view?usp=sharing"
                  className="btn button my-2 my-sm-0" target="_blank">
                  Resume
                </a>
              </div>
              <br />
              <p className="font-italic text-white">

                <div>
                  <div>
                    <span className="colorBlue">{text0} </span>
                  </div>
                </div>
              </p>

            </div>
            <div className="col w-50 img-wrapper" style={{ paddingTop: '130px', opacity: '55%', paddingBottom: '100px', marginLeft: '150px' }}>
              <img
                 width="100%" height="100%"
                alt="img"
                src="./Priya.jpeg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );

}
export default About;