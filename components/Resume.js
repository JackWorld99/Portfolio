import { IoBookOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"

const Resume = () => {
    const {page} = useStateContext()

    return (
        <article className={`resume ${page === "resume" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline className="ion-icon"/>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">University Tunku Abdul Rahman (UTAR)</h4>
                        <span><b>Bachelor of Science (Honours) Software Engineering</b></span>
                        <span>2018 — 2022</span>
                        <p className="timeline-text">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                            quas molestias
                            exceptur.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Foon Yew High School</h4>
                        <span><b>Science</b></span>
                        <span>2012 — 2017</span>
                        <p className="timeline-text">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                            quas molestias
                            exceptur.
                        </p>
                        <p className="timeline-text"><b>UEC&ensp;·&ensp;SPM&ensp;</b></p>
                    </li>
                    {/* <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">New york academy of art</h4>
                        <span>2006 — 2007</span>
                        <p className="timeline-text">
                            Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                            omnis..
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">High school of art and design</h4>
                        <span>2002 — 2004</span>
                        <p className="timeline-text">
                            Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                            magni dolores
                            eos.
                        </p>
                    </li> */}
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline className="ion-icon"/>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title"> Internship - Web Developer</h4>
                        <span>Oct 2020 — Jan 2021</span>
                        <p className="timeline-text">
                            During my industrial training/internship, I worked as a <b>Web Developer</b> in a shipping/logistics company call <b>Wepost</b>. Job scope conducts <b>Frontend Web Design</b> and <b>Backend Web Development</b>. 
                        </p>
                        <span className="skill-learn">Learned Skills</span>
                        <p className="timeline-text"><b>Laravel&ensp;·&ensp;HTML&ensp;·&ensp;JavaScript&ensp;·&ensp;CSS&ensp;·&ensp;jQuery&ensp;·&ensp;MySQL&ensp;·&ensp;RESTAPI&ensp;·&ensp;Bootstrap&ensp;·&ensp;Git</b></p>
                        {/* <div className="intern-skill"> 
                            <p className="intern">Laravel&ensp;·&ensp;HTML&ensp;·&ensp;JavaScript&ensp;·&ensp;CSS&ensp;·&ensp;jQuery&ensp;·&ensp;MySQL&ensp;·&ensp;RESTAPI&ensp;·&ensp;Bootstrap&ensp;·&ensp;Git</p>
                        </div> */}
                    </li>
                    {/* <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Art director</h4>
                        <span>2013 — 2015</span>
                        <p className="timeline-text">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                            quas molestias
                            exceptur.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Web designer</h4>
                        <span>2010 — 2013</span>
                        <p className="timeline-text">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                            quas molestias
                            exceptur.
                        </p>
                    </li> */}
                </ol>
            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Web design</h5>
                            <data value="80">80%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{width: "80%"}}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Graphic design</h5>
                            <data value="70">70%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{width: "70%"}}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Branding</h5>
                            <data value="90">90%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{width: "90%"}}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">WordPress</h5>
                            <data value="50">50%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{width: "50%"}}></div>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default Resume