import React from 'react'
import './resume.modules.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'




const Resume = () => {
  return (
    <article className="resume-wrapper text-center position-relative">
    <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
      <header className="resume-header pt-4 pt-md-0">
        <div className="row">          
          <div className="col">
            <div className="row p-4 justify-content-center justify-content-md-between">
              <div className="primary-info col-auto">
                <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Resume</h1>
                <div className="title mb-3">Full Stack Developer</div>               
              </div>
              <div className="secondary-info col-auto mt-2">
                <ul className="resume-social list-unstyled">
                        <li className="mb-3"><a className="text-link" href="https://linkedin.com/in/clara-lisle" target="_blank"><span  className="fa-container text-center me-2"><i className="fab fa-linkedin-in fa-fw"><FontAwesomeIcon icon={faLinkedin} /></i> </span>linkedin.com/in/clara-lisle</a></li>
                        <li className="mb-3"><a className="text-link" href="https://github.com/ClaraLis1"  target="_blank"><span className="fa-container text-center me-2"> <FontAwesomeIcon icon={faGithub} /><i className="fab fa-github-alt fa-fw"></i></span>github.com/ClaraLis1</a></li>
              </ul>
              </div>
            </div>            
          </div>
        </div>
      </header>
      <div className="resume-body p-5">
        <section className="resume-section summary-section mb-5">
          <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills</h2>
          <div className="resume-section-content">
            <p className="mb-0">HTML5 - CSS3 - JAVASCRIPT - REACT JS - BOOTSTRAP - TYPESCRIPT -
              RESPONSIVE DESIGN - FIGMA - JAVA - SPRING BOOT - GITHUB - MYSQL - MONGODB
                WORKBENCH - POSTMAN - AGILE METHODOLOGY</p>
               <p> Certified Tech Developer. I am seeking to grow professionally as a Full Stack Developer, leveraging my 10+ years of experience in accounting, administration, and finance.</p>
          </div>
        </section>
        <div className="row">
          <div className="col-lg-9">
          <section className="resume-section experience-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Professional Experience</h2>
              <div className="resume-section-content">
                <div className="resume-timeline position-relative">
                  <article className="resume-timeline-item position-relative pb-5">
                    
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                          <h3 className="resume-position-title font-weight-bold mb-1">Front End Developer</h3>
                          <div className="resume-company-name ms-auto"></div>
                      </div>
                      <div className="resume-position-time">Oct 2022 - Dec 2022</div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>DigitalBooking.com, as part of Certified Tech Developer course.</p>                      
                      <ul>
                        <li>Developed the website using HTML5, CSS3, and React JS, with a focus on responsive design.</li>
                        <li>Managed user interactions and event handling, including validations.</li>
                        <li>Connected to APIs and handled the response management.</li>
                      </ul>
                      <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                      <ul className="list-inline">
                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML</span></li>
                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">CSS3</span></li>
                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">React Js</span></li>
                        <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Javascript</span></li>
                      </ul>
                    </div>
                  </article>                  
                 </div>             
              </div>
            </section>
            <section className="resume-section experience-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
              <div className="resume-section-content">
                <div className="resume-timeline position-relative">
                  <article className="resume-timeline-item position-relative pb-5">
                    
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                          <h3 className="resume-position-title font-weight-bold mb-1">Agricultural Business</h3>
                          <div className="resume-company-name ms-auto">Agricultural Administration</div>
                      </div>
                      <div className="resume-position-time">2021 - Present</div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>Role: Administrative.</p>
                    </div>
                  </article>
                  
                  <article className="resume-timeline-item position-relative pb-5">
                    
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                          <h3 className="resume-position-title font-weight-bold mb-1">Accounting</h3>
                          <div className="resume-company-name ms-auto">OSDE</div>
                      </div>
                      <div className="resume-position-time">2015 - 2021</div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>Role: Accounting Analyst.</p>                      
                    </div>
                  </article>
                  
                  <article className="resume-timeline-item position-relative pb-5">
                    
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                          <h3 className="resume-position-title font-weight-bold mb-1">Agricultural Business</h3>
                          <div className="resume-company-name ms-auto">Agricultural Administration</div>
                      </div>
                      <div className="resume-position-time">2008 - 2015</div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>Role: Administrative.</p>
                    </div>
                  </article>                
                  <article className="resume-timeline-item position-relative pb-5">
                    
                    <div className="resume-timeline-item-header mb-2">
                      <div className="d-flex flex-column flex-md-row">
                          <h3 className="resume-position-title font-weight-bold mb-1">Human Resources</h3>
                          <div className="resume-company-name ms-auto">Accenture</div>
                      </div>
                      <div className="resume-position-time">2021 - Present</div>
                    </div>
                    <div className="resume-timeline-item-desc">
                      <p>Role:  HR Reporting Analyst.</p>
                    </div>
                  </article>                 
                  
                </div>   
                
                
              </div>
            </section>
          </div>
          <div className="col-lg-3">
            <section className="resume-section skills-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
              <div className="resume-section-content">
                  <div className="resume-skill-item">
                    <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                    <ul className="list-unstyled mb-4">
                      
                      <li className="mb-2">
                          <div className="resume-skill-name">React JS</div>
                        <div className="progress resume-progress">
                        <div className="progress-bar theme-progress-bar-dark" role="progressbar"  style={{width: "94%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                      </li>
                      <li className="mb-2">
                          <div className="resume-skill-name">JavaScript</div>
                        <div className="progress resume-progress">
                        <div className="progress-bar theme-progress-bar-dark" role="progressbar"  style={{width: "96%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                      </li>
                     
                      <li className="mb-2">
                          <div className="resume-skill-name">HTML/CSS/SASS</div>
                        <div className="progress resume-progress">
                        <div className="progress-bar theme-progress-bar-dark" role="progressbar"  style={{width: "96%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                          <div className="resume-skill-name">Java/SpringBoot</div>
                        <div className="progress resume-progress">
                        <div className="progress-bar theme-progress-bar-dark" role="progressbar"  style={{width: "77%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                      </li>                     
                    </ul>
                  </div>
                  
                  <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                      <ul className="list-inline">
                        <li className="list-inline-item"><span className="badge badge-light">MySql</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">MongoDb</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">TypeScript</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">JSDocs</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Figma</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Bootstrap</span></li>
                        <li className="list-inline-item"><span className="badge badge-light">Agile Methodology</span></li>
                      </ul>
                  </div>
              </div>
            </section>
            <section className="resume-section education-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
              <div className="resume-section-content">
                <ul className="list-unstyled">
                  <li>
                      <div className="resume-degree font-weight-bold">Certified Tech Developer</div>
                      <div className="resume-degree-org">Digital House</div>
                      <div className="resume-degree-time">2021 - 2022</div>
                  </li>
                  <li className="mb-2">
                      <div className="resume-degree font-weight-bold">Bachelor of Business Administration</div>
                      <div className="resume-degree-org">Universidad de Buenos Aires</div>
                      <div className="resume-degree-time">2000 - 2006</div>
                  </li>
                </ul>
              </div>
            </section>            
            <section className="resume-section language-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
              <div className="resume-section-content">
                <ul className="list-unstyled resume-lang-list">
                  <li className="mb-2"><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                  <li><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(C1 Advanced)</small></li>
                </ul>
              </div>
            </section>         
            
          </div>
        </div>
      </div>
      
    </div>
  </article> 

  )
}

export default Resume