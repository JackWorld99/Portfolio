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
                        <p className="timeline-text">During my internship, I worked as a <b>Web Developer</b> at <b>Wepost Ecommerce</b>, a shipping and logistics company. My role involved both <b>Frontend Web Design</b> and <b>Backend Web Development</b>.</p>
                        <ul className="intern-learn">
                            <li>Developed and designed user interfaces using PHP frameworks, HTML5, JavaScript, and CSS3, resulting in increased target audience engagement.</li>  
                            <li>Created models within an MVC application to implement the necessary business logic and meet specific business requirements.</li>  
                            <li>Developed accessible, responsive, and functional user interfaces to ensure a seamless experience across all devices.</li>  
                            <li>Achieved a consistent visual theme across the website by standardizing fonts, formatting, images, and layouts.</li>  
                            <li>Implemented advanced search, paging, and export functionalities on each screen.</li>  
                            <li>Utilized jQuery and JSON to build dynamic user interfaces that efficiently retrieve and post data.</li>  
                            <li>Built RESTful APIs that enable users to submit information and store data in MySQL databases.</li>  
                            <li>Planned, designed, analyzed, developed, tested, deployed, and maintained robust web applications.</li>
                        </ul>
                        <span className="skill-learn">Tasks</span>
                        <details style={{color: "white"}}>
                            <summary style={{cursor: "pointer"}}>Show more...</summary>
                            <ul className="intern-learn"> 
                                <li><b>Ecommerce Team Assignment:</b> Assigned to the Ecommerce team and leveraged algorithms to group packages containing purchased products into appropriate shipping containers (e.g., sea or air freight), thereby streamlining package tracking for customer service and boosting sales.</li>
                                <li><b>Backend Application Support:</b> Collaborated with customer service to identify challenges with the backend application; resolved technical issues, provided ongoing support, optimized the user interface, and customized new features to enhance functionality.</li>
                                <li><b>Referral Program Development:</b> Contributed to the development of a referral program page, enabling users to earn rebate benefits and points by referring the app.</li>
                                <li><b>Promotional Campaign Support:</b> Participated in the design and implementation of a questionnaire for distributing coupons during the Double 11 and Double 12 shopping festivals.</li>
                                <li><b>Database Optimization:</b> Collaborated with colleagues to design and implement new MySQL databases, improving overall system efficiency and simplifying future maintenance.</li>
                                <li><b>Financial Reporting Tools:</b> Developed detailed reports and charts for cash rebate settlements, incorporating functionality for finance administrators to export CSV files on a daily, monthly, or yearly basis as needed.</li>
                                <li><b>Team Collaboration:</b> Actively participated in weekly team meetings, providing regular project updates as assigned by the manager.</li>
                            </ul>
                        </details>
                        <span className="skill-learn">Learned Skills<p className="timeline-text" style={{display: "inline"}}><b>&ensp;·&ensp;Laravel&ensp;·&ensp;HTML&ensp;·&ensp;JavaScript&ensp;·&ensp;CSS&ensp;·&ensp;jQuery&ensp;·&ensp;MySQL&ensp;·&ensp;Bootstrap&ensp;·&ensp;Git</b></p></span>
                        
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
            <section className="skill" style={{marginBottom: "30px"}}>
                <h3 className="h3 skills-title">Courses Completed</h3>
                <details style={{color: "white"}}>
                    <summary style={{cursor: "pointer"}}>Show more...</summary>
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