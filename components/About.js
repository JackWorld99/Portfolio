import React from "react"
import { IoSchoolOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
// import { IoMdDownload } from "react-icons/io"

const About = () => {
    const {page} = useStateContext()

    return (
        <article className={`about ${page === "about" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>Hi, I&apos;m Wei Jian—though you can also call me Jack. As a recent graduate in Software Engineering, I approach the tech world as an aspiring but inexperienced developer driven to create meaningful impact through code—a belief some might call idealistic, but one I embrace wholeheartedly</p>
                <p>My journey into computing began unconventionally - despite household computer access during my formative years,  my parents restricted my Internet access due to concerns over violent and explicit content until late adolescence. Prior to high school, I possessed only basic computer literacy, struggling even with fundamental operations like proper system shutdown. This technological disadvantage became acutely apparent during my initial university programming courses, where code appeared utterly alien to me. My academic performance during the first semester nearly resulted in failing grades, prompting serious doubts about my career path choice.</p>
                <p>Confronted with a new academic environment and no prior knowledge of programming. This rocky start prompted deep self-reflection. Had I chosen the wrong path? Was I inherently unsuited for this field? Determined to bridge the gap, I immersed myself in foundational programming tutorials on YouTube. Through persistent study, I discovered a universal truth: Despite syntactic differences, programming languages share core logical principles. This realization became my turning point. I grew to appreciate the precision of computing—its unwavering honesty. Code executes exactly as instructed, a quality that now fuels my passion for technology.</p>
                <p>Curiosity defines my approach to learning. When encountering novel technologies or elegant algorithms, I dive into meticulous research to understand their mechanics. This trait once led me to develop an automated book scraping application during a period of academic resource scarcity. Faced with limited access to materials, I dedicated countless hours to researching web scraping methodologies. While some might view this intensity as obsessive, I thrive on the intellectual satisfaction of solving complex problems—even if it means losing sleep in the process.</p>
                <p>I thrive on identifying challenges and transforming ideas into reality. I enjoy the journey from novice to proficient, exploring new concepts and directions along the way. Though my broad interests have made me a generalist rather than a specialist, I view this versatility as an asset. I prioritize streamlining complexity, believing that elegant solutions should minimize unnecessary effort. Time optimization is paramount; Efficiency governs my work philosophy - optimizing processes to create temporal space for creative exploration and personal growth.</p>
                <p>In an ephemeral existence where few discover true passion, I consider myself fortunate to have identified mine early. My personal philosophy remains: find joy in each day and savor life&apos;s journey.</p>
                {/* <button className="form-btn">
                    <IoMdDownload className="ion-icon"/>
                    <span>CV</span>
                </button> */}
            </section>
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
                        <p className="timeline-text" style={{marginBottom:"5px"}}>
                            The University of Raman is a well-known private comprehensive research university located in Malaysia. The name is taken from Tunku Abdul Rahman, the first prime minister of Malaysia. It is one of the Premier Digital Tech Universities that are recognized by Malaysia Digital Economy Corporation (MDEC).
                        </p>
                        <p className="timeline-text">
                            UTAR&ensp;-&ensp;&ldquo;Universiti Tak Ada Rehat&rdquo; in Malay, which means it is a University without rest, the mantra often used by the lecturer of utar when giving assignments. The long semester is 14 weeks, and the short semester is 7 weeks. An average of five subjects are taken in a semester, and each subject has more than one assignment. It is a very fast paced university, and the schedule is full every day. I am either doing assignments or preparing for tests every day. although every day was very busy without university life, but every day was very fulfilling. Fortunately, I survived and finally graduated.
                        </p>
                       <section className="blog-posts" style={{margin: "15px 0px 30px 0px"}}>
                            <ul className="blog-posts-list">
                                <li className="blog-post-item">
                                    <a href="https://www.utar.edu.my">
                                        <figure className="blog-banner-box">
                                            <img src="/images/university.webp" alt="Design conferences in 2022" loading="lazy" />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </li>
                    <li className="timeline-item">
                        <a href="https://www.foonyew.edu.my/">
                             <h4 className="h4 timeline-item-title">Foon Yew High School</h4>
                        </a>
                        <span><b>Science</b></span>
                        <span>2012&ensp;-&ensp;2017</span>
                        <p className="timeline-text">
                            Foon Yew High School - The largest Chinese independent high school in Malaysia. That&apos;s right, this is the high school I went to. There are endless homework, tests, and classes six days a week. There are laughter, tears, and confusion, it&apos;s a place full of memories. I used to think that living here was like a year, but in retrospect it was actually the happiest time so far.
                        </p>
                        <p className="timeline-text"><b>UEC&ensp;·&ensp;SPM&ensp;</b></p>
                        <section className="blog-posts" style={{margin: "15px 0px"}}>
                            <ul className="blog-posts-list">
                                <li className="blog-post-item">
                                    <a href="https://www.foonyew.edu.my/">
                                        <figure className="blog-banner-box">
                                            <img src="/images/highSchool.webp" alt="Design conferences in 2022" loading="lazy" />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </li>
                </ol>
            </section>
        </article>
    )
}

export default About