import React from 'react';
import AOS from "aos"
import "./css/style.css"
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/header/navbar"
import IntroSection from "./components/sections/introSection"
import AboutSection from "./components/sections/aboutSection"
import ExperienceSection from "./components/sections/experienceSection"
import ProjectsSection from "./components/sections/projectsSection"
import SkillsSection from "./components/sections/skillsSection"
import EducationSection from "./components/sections/educationSection"
import ContactSection from "./components/sections/contactSection"
import Footer from "./components/footer/footer"

AOS.init()

function App() {
  return (
    <div>
      
      <header>
        <Navbar/>
      </header>

      <body>
        <div className="content">
            <section id="introSection">
              <IntroSection/>
            </section>
            <section id="aboutSection">
              <AboutSection/>
            </section>
            <section id="experienceSection">
              <ExperienceSection/>
            </section>
            <section id="projectsSection">
              <ProjectsSection/>
            </section>
            <section id="skillsSection">
              <SkillsSection/>
            </section>
            <section id="educationSection">
              <EducationSection/>
            </section>
            <section id="contactSection">
              <ContactSection/>
            </section>
            <footer>
              <Footer/>
            </footer>
        </div>
      </body>

    </div>
  );
}

export default App;