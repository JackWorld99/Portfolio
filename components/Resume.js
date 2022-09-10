import React from "react"
import { IoBookOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import useSWR from 'swr'

const Resume = () => {
    const {page} = useStateContext()
    const {data} = useSWR('/api/staticdata')
    const parseData = JSON.parse(data)

    return (
        <article className={`resume ${page === "skills" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline className="ion-icon"/>
                    </div>
                    <h3 className="h3">Work Experience</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title"> Internship - Web Developer</h4>
                        <span>Oct 2020&ensp;-&ensp;Jan 2021</span>
                        <p className="timeline-text">
                            During my industrial training/internship, I worked as a <b>Web Developer</b> in a shipping/logistics company call <b>Wepost Ecommerce</b>. Job scope conducts <b>Frontend Web Design</b> and <b>Backend Web Development</b>. 
                        </p>
                        <ul className="intern-learn"> 
                            <li>Being assigned to the e-commerce team and using algorithms to group packages that match the products purchased by the user into appropriate containers, such as sea and air freight, it will make it easier for customer service staff to check the status of packages instantly, which will increase sales.</li>
                            <li>Participated in the development of a questionnaire to give away coupons during the Double 11 and Double 12 shopping festivals.</li>
                            <li>Communicate with customer service staff to understand the problems they face when using the backend application, solve technical problems, provide technical support, optimise the operating interface and customise new features.</li>
                            <li>Participate in the development of a referral program page where users can earn corresponding rebate benefits and points by referring apps.</li>
                            <li>Develop reports and charts for the settlement of cash rebates, with the option for the finance department administrator to export CSV on a yearly, monthly or daily basis as required.</li>
                            <li>Collaborate with colleagues to create new SQL databases to improve overall efficiency and facilitate future maintenance.</li>
                            <li>Actively participate in weekly team meetings and report on the progress of the project.</li>
                            <li>Perform weekly responsibilities and projects assigned by the manager.</li>
                        </ul>
                        <span className="skill-learn">Learned Skills<p className="timeline-text" style={{display: "inline"}}><b>&ensp;·&ensp;Laravel&ensp;·&ensp;HTML&ensp;·&ensp;JavaScript&ensp;·&ensp;CSS&ensp;·&ensp;jQuery&ensp;·&ensp;MySQL&ensp;·&ensp;RESTAPI&ensp;·&ensp;Bootstrap&ensp;·&ensp;Git</b></p></span>
                        
                        <section className="blog-posts" style={{margin: "15px 0px"}}>
                            <ul className="blog-posts-list">
                                <li className="blog-post-item">
                                    <a href="https://my.linkedin.com/company/wepost-sdn-bhd">
                                        <figure className="blog-banner-box">
                                            <img src="/images/intern.webp" alt="Design conferences in 2022" loading="lazy" />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </section>
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
                                <img src={`/images/${d.img}`} alt={d.alt} />
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <section className="skill" style={{marginBottom: "30px", cursor: "pointer"}}>
                <h3 className="h3 skills-title">Courses Completed</h3>
                <details style={{color: "white"}}>
                    <summary>Show more...</summary>
                        <ul className="intern-learn">
                            {parseData.courses.map(c => (
                                <li key={c.id}>
                                    <span style={{color: "var(--vegas-gold)"}}><b>{c.name}</b></span>
                                    <p>{c.skill ? c.skill : ""}</p>
                                </li>
                            ))}
                        </ul>
                </details>
            </section>
            <section className="service">
                <h3 className="h3 service-title">Desired Career</h3>
                <ul className="service-list">
                    {parseData.expectedCareer.map(ec => (
                        <li className="service-item" key={ec.id}>
                            <div className="service-icon-box">
                                <img src={`/images/${ec.img}`} alt={ec.alt}  style={{width:"40px"}}/>
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title" style={{color:"#ffdb70"}}>{ec.name}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}

export default Resume