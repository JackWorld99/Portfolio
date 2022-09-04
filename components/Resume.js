import { IoBookOutline, IoSchoolOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import useSWR from 'swr'

const Resume = () => {
    const {page} = useStateContext()
    const { data} = useSWR('/api/staticdata')
    const parseData = JSON.parse(data)

    return (
        <article className={`resume ${page === "resume" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoSchoolOutline className="ion-icon"/>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <a href="https://www.utar.edu.my">
                            <h4 className="h4 timeline-item-title">University Tunku Abdul Rahman (UTAR)</h4>
                        </a>
                        <a href="https://study.utar.edu.my/software-engineering.php">
                            <span><b>Bachelor of Science (Honours) Software Engineering</b></span>
                        </a>
                        <span>2018&ensp;-&ensp;2022</span>
                        <p className="timeline-text">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                            quas molestias
                            exceptur.
                        </p>
                        <section className="blog-posts" style={{margin: "15px 0px"}}>
                            <ul className="blog-posts-list">
                                <li className="blog-post-item">
                                    <a href="https://www.utar.edu.my">
                                        <figure className="blog-banner-box">
                                            <img src="/images/university.jpg" alt="Design conferences in 2022" loading="lazy" />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <span className="skill-learn">Courses Completed</span>
                        <a href="https://study.utar.edu.my/programme-structure-software-engineering.php" style={{color: "white"}}>- Learn more...</a>
                    </li>
                    <li className="timeline-item">
                        <a href="https://www.foonyew.edu.my/">
                             <h4 className="h4 timeline-item-title">Foon Yew High School</h4>
                        </a>
                        <span><b>Science</b></span>
                        <span>2012&ensp;-&ensp;2017</span>
                        <p className="timeline-text">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                            quas molestias
                            exceptur.
                        </p>
                        <p className="timeline-text"><b>UEC&ensp;·&ensp;SPM&ensp;</b></p>
                        <section className="blog-posts" style={{margin: "15px 0px"}}>
                            <ul className="blog-posts-list">
                                <li className="blog-post-item">
                                    <a href="https://www.foonyew.edu.my/">
                                        <figure className="blog-banner-box">
                                            <img src="/images/highSchool.png" alt="Design conferences in 2022" loading="lazy" />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </li>
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
                        <span>Oct 2020&ensp;-&ensp;Jan 2021</span>
                        <p className="timeline-text">
                            During my industrial training/internship, I worked as a <b>Web Developer</b> in a shipping/logistics company call <b>Wepost</b>. Job scope conducts <b>Frontend Web Design</b> and <b>Backend Web Development</b>. 
                        </p>
                        <section className="blog-posts" style={{margin: "15px 0px"}}>
                            <ul className="blog-posts-list">
                                <li className="blog-post-item">
                                    <a>
                                        <figure className="blog-banner-box">
                                            <img src="/images/intern.png" alt="Design conferences in 2022" loading="lazy" />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <span className="skill-learn">Learned Skills</span>
                        <p className="timeline-text"><b>Laravel&ensp;·&ensp;HTML&ensp;·&ensp;JavaScript&ensp;·&ensp;CSS&ensp;·&ensp;jQuery&ensp;·&ensp;MySQL&ensp;·&ensp;RESTAPI&ensp;·&ensp;Bootstrap&ensp;·&ensp;Git</b></p>
                    </li>
                </ol>
            </section>
            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <ul className="skills-list content-card">
                    {parseData.progressBar.map(pb => ( 
                        <li className="skills-item" key={pb.id}>
                            <div className="title-wrapper">
                                <h5 className="h5">{pb.name}</h5>
                                <data value={pb.score}>&nbsp;·&ensp;{pb.score}</data>
                            </div>
                            <div className="skill-progress-bg">
                                <div className="skill-progress-fill" style={pb.style}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            {parseData.skillIcon.map(s => (
                <section className="clients" key={s.id}>
                    <h3 className="h3 clients-title">{s.name}</h3>
                    <ul className="clients-list has-scrollbar">
                        {s.data.map(d => (
                            <li className="clients-item" key={d.id}>
                                <img src={`/skillIcon/${d.img}`} alt={d.alt} />
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </article>
    )
}

export default Resume