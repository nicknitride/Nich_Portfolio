// import author from "../assets/received_113969760040684-removebg-preview.png";
import transparentauthor from "../assets/2.png";
import ProjectCard from "./ProjectCard";
import YTClone from "../assets/YT_Clone.png";
import hevy from "../assets/Hevy.png";
import "./Home.css";

function NewNav() {
  return (
    <>
      <div className="outer-nav">
        <div className="left-nav">
          <a href="#about-author">About</a>
          <a href="#projects">Projects</a>
          <a href="#contactme">Contact</a>
        </div>
      </div>
    </>
  );
}
function Home() {
  return (
    <>
      <div className="scroll-lock-wrapper">
        <section id="about">
          <NewNav />

          <div className="transparent-author-card">
            <div className="author-image">
              <img src={transparentauthor} alt="Image of Author" />
            </div>
            <div className="author-text">
              <h1>Nicholo Pardines</h1>
              <p>Student. Developer. Caffeine-Consumer.</p>
            </div>
          </div>
        </section>
        <section id="about-author">
          <div className="centered-container">
            <div className="actual-about-author">
              <h1>About</h1>
              <p>
                I'm a 3rd Year Computer Science student from Ateneo de Manila
                University. Web development has been the focus of my independent
                learning for two years now. However, I enjoy backend work
                equally, as I have been using Linux, setting up servers, and
                experimenting with databases for three or more years.
              </p>
              <div className="tech-known">
                <h3>
                  <span>#</span> Tech I Know:
                </h3>
                <h4>
                  <span>##</span> Basic Web Dev:
                </h4>
                <div className="tech-known-button-flex">
                  <span className="rounded-button">Javascript</span>
                  <span className="rounded-button">CSS</span>
                  <span className="rounded-button">HTML</span>
                </div>
                <h4>
                  <span>##</span> Basic Web Backend:
                </h4>
                <div className="tech-known-button-flex">
                  <span className="rounded-button">NodeJS</span>
                  <span className="rounded-button">PostgreSQL</span>
                  <span className="rounded-button">MySQL</span>
                  <span className="rounded-button">Vite</span>
                  <span className="rounded-button">Axios</span>
                  <span className="rounded-button">Node MySQL</span>
                </div>
                <h4>
                  <span>##</span> Basic Web Frontend:
                </h4>
                <div className="tech-known-button-flex">
                  <span className="rounded-button">ReactJS</span>
                  <span className="rounded-button">Tailwind CSS</span>
                  <span className="rounded-button">Material UI</span>
                  <span className="rounded-button">shadcn/ui</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          {/* Second section is for projects and experience */}
          <div className="centered-container project-card-container">
            <h1 className="large-centered-text">Project (1/3)</h1>
            <ProjectCard
              cardName="Java (ObjectStream)"
              projName="CSCI 22 Final Project (S.Y. 2020-2021) "
              projDescription="Implemented a 2D game using Java, an AWS instance (server), and networking."
              projDetails="Technologies Used: Java, x11, SSH Port Forwarding, AWS (Hosting)"
              cardImg={null}
            />
          </div>
        </section>
        <section id="yt-clone">
          <div className="centered-container project-card-container">
            <h1 className="large-centered-text">Project (2/3)</h1>
            <ProjectCard
              cardName="YouTube Clone"
              projName="Goal: Understand advanced CSS components"
              projDescription="Implemented a recreation of YouTube's 2018 UI with functioning hoverables and mobile-responsiveness."
              projDetails="Technologies Used: HTML + CSS"
              cardImg={YTClone}
            />
          </div>
        </section>
        <section id="hevy-fitness">
          <div className="centered-container project-card-container">
            <h1 className="large-centered-text">Project (3/3)</h1>
            <ProjectCard
              cardName="IntelliFit - Fitness App"
              projName="CSCI 42 Requirement (Ongoing)"
              projDescription="A fitness app which combines MyFitnessPal and Hevy that was implemented with: "
              projDetails="ReactJS, NodeJS, Axios, CORS, NodeMySQL, Vite, and TypeScript."
              cardImg={hevy}
            />
          </div>
        </section>
        <section id="contactme">
          <div className="centered-container ">
            <div className="about-container">
              <h1 className="large-centered-text">Contact Me: </h1>
              <div className="cont-info">
                <a href="https://drive.google.com/file/d/1ToiKvzcX-6Lp9mtJCiAMSOkXY0H4mjSZ/view?usp=sharing">Resume</a>
                <br />
                <a href="https://github.com/nicknitride/">GitHub</a>
                <p>E-Mail: nicholopatrickpardines@yahoo.com | nicholo.pardines@outlook.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
