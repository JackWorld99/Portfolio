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
                <p>
                    Hi, I&apos;m Wei Jian, you can call me Jack as well. I&apos;m a rookie fresh out of Software Engineering. I&apos;m a delusional rookie who wants to change the world with code.
                </p>
                <p>
                    To be honest, I was a computer idiot before high school. Although I had a computer at home, my parents restricted my access to the Internet from a young age because it was full of all kinds of violent and pornographic content. I only have the opportunity to use the computer when I have a computer class at school. At that time I didn&apos;t even know how to shut down the computer. I started to use the computer unrestricted after I graduated from high school. You can imagine how devastated I was, when I first got into programming in university, the code was like alien text to me. My grades in the first semester of university almost ended in failing grades. 
                </p>
                <p>
                    With the new environment of the university and the fact that I knew nothing about programming at the time, I began to wonder if I had chosen the wrong subject and whether I was not suitable for this path. I started searching for tutorials on YouTube, beginning with the basics. But I found that although the languages were different, they still had a lot in common, and after a period of study, I started to keep up. Computers and codes won&apos;t lie to you, it treats you with sincerity, if you enter an order to tell him to go left, he will never go right, and I think that&apos;s why I&apos;m so obsessed with it.
                </p>
                <p>
                    I&apos;m a inquisitive person, when I encounter new technologies or better code algorithms, I&apos;ll research how this technique works and find out as much information as possible. There was a period of time when I was often struggling to find books. In order to solve this problem, I came up with the idea of developing a book scraping application. I stayed up all night to study how to implement web scraping. I&apos;m the type of person who loses sleep when I find something new that interests me, it sounds crazy, but it brings me great satisfaction when a vexing problem is solved. 
                </p>
                <p>
                    I enjoy the process of finding problems in life and turning my thoughts and ideas into reality. I enjoy the process of going from noob to proficient. Learn new things and go in different directions. Because of this personality, I know a little bit of everything but not proficient. I&apos;m committed to making complex things simple, the simpler the better. I don&apos;t like wasting time, I always try to get things done in the shortest time, and then leave the rest of the time for myself to do what I want to do. After all, life is short and it&apos;s not easy to find what you love to do and stick to what you like. My motto is to be happy and enjoy life every day.
                </p>
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