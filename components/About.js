import React, {useRef, useState} from "react"
import { IoMdDownload } from "react-icons/io"
import { IoCloseOutline, IoSchoolOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import useSWR from 'swr'

const About = () => {
    const {page} = useStateContext()
    const [toggleModal, setToggleModal] = useState(false)
    const [overlayModal, setOverlayModal] = useState(false)
    const imgRef = useRef() 
    const titleRef = useRef()
    const textRef = useRef()
    const testimonialsImgRef = useRef() 
    const testimonialsTitleRef = useRef()
    const testimonialsTextRef = useRef()
    const { data} = useSWR('/api/staticdata')
    const parseData = JSON.parse(data)
   
    const handleClick = () => {
        imgRef.current.src = testimonialsImgRef.current.src
        imgRef.current.alt = testimonialsImgRef.current.alt
        titleRef.current.innerHTML = testimonialsTitleRef.current.innerHTML
        textRef.current.innerHTML = testimonialsTextRef.current.innerHTML
        modal()
    }

    const modal = () => {
        setToggleModal(!toggleModal)
        setOverlayModal(!overlayModal)
    }

    return (
        <article className={`about ${page === "about" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                <p>
                    Hi, I&apos;m Wei Jian, you can call me Jack as well. I&apos;m a rookie fresh out of Software Engineering. I&apos;m an ordinary person, a delusional rookie who wants to change the world with code.
                </p>
                <p>
                    To be honest, I was a computer idiot before high school. Although I have a computer at home, the Internet is full of all kinds of violent and pornographic content, so my parents have restricted my access since I was a child. The only time I have access to computers is during computer classes at school. At that time I didn&apos;t even know how to shut down the computer. I started to use the computer unrestricted after I graduated from high school. You can imagine how devastated I was when I first got into programming in university, the code was like alien text to me. My grades in the first semester of university almost ended in failing grades. 
                </p>
                <p>
                    With the new environment of the university and the fact that I knew nothing about programming at the time, I began to wonder if I had chosen the wrong subject and whether I was not suitable for this path. During the epidemic, I couldn&apos;t go anywhere, so I searched for tutorials on YouTube and started to learn step by step from the basics, and then I slowly mastered it. Computers and codes won&apos;t lie to you, it treats you with sincerity, if you enter an order to tell him to go left, he will never go right, and I think that&apos;s why I&apos;m so obsessed with it.
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
                            UTAR&ensp;-&ensp;&ldquo;Universiti Tak Ada Rehat&rdquo; in Malay, which means it is a University without rest, the mantra often used by the lecturer of utar when giving assignments. The long term is 14 weeks, and the short term is 7 weeks. An average of five subjects are taken in a semester, and each subject has more than one assignment. It is a very fast paced university, and the schedule is full every day. I am either doing assignments or preparing for tests every day. although every day was very busy without university life, but every day was very fulfilling. Fortunately, I survived and finally graduated.
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
                            Foon Yew High School - The largest Chinese independent high school in Malaysia. That&apos;s right, this is the high school I went to. There are endless homework, tests, and classes six days a week. There are laughter, tears, and confusion, it&apos;s a place full of memories. I used to think that living here was like a year, but in retrospect it was actually the happiest time so far.
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
            {/* <section className="service">
                <h3 className="h3 service-title">Desired Career</h3>
                <ul className="service-list">
                    {parseData.expectedCareer.map(ec => (
                        <li className="service-item" key={ec.id}>
                            <div className="service-icon-box">
                                <img src={`/images/${ec.img}`} alt={ec.alt} width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title" style={{color:"#ffdb70"}}>{ec.name}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </section> */}
            {/* <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    <li className="testimonials-item">
                        <div className="content-card" onClick={handleClick}>
                            <figure className="testimonials-avatar-box">
                                <img ref={testimonialsImgRef} src="/images/avatar-1.png" alt="Daniel lewis" width="60" />
                            </figure>
                            <h4 className="h4 testimonials-item-title" ref={testimonialsTitleRef} >Daniel lewis</h4>
                            <div className="testimonials-text" ref={testimonialsTextRef} >
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" onClick={handleClick}>
                            <figure className="testimonials-avatar-box">
                                <img src="/images/avatar-2.png" alt="Jessica miller" width="60" />
                            </figure>
                            <h4 className="h4 testimonials-item-title" ref={testimonialsTitleRef} >Jessica miller</h4>
                            <div className="testimonials-text" ref={testimonialsTextRef} >
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" onClick={handleClick}> 
                            <figure className="testimonials-avatar-box">
                                <img src="/images/avatar-3.png" alt="Emily evans" width="60" />
                            </figure>
                            <h4 className="h4 testimonials-item-title" ref={testimonialsTitleRef} >Emily evans</h4>
                            <div className="testimonials-text" ref={testimonialsTextRef} >
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" onClick={handleClick}>
                            <figure className="testimonials-avatar-box">
                                <img src="/images/avatar-4.png" alt="Henry william" width="60" />
                            </figure>
                            <h4 className="h4 testimonials-item-title" ref={testimonialsTitleRef} >Henry william</h4>
                            <div className="testimonials-text" ref={testimonialsTextRef} >
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <div className={`modal-container ${toggleModal ? "active" : ""}`} >
                <div className={`overlay ${overlayModal ? "active" : ""}`} onClick={modal}></div>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" onClick={modal}>
                        <IoCloseOutline className="ion-icon"/>
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img ref={imgRef} src="/images/avatar-1.png" alt="Daniel lewis" width="80" />
                        </figure>
                        <img src="/images/icon-quote.svg" alt="quote icon" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title" ref={titleRef} >Daniel lewis</h4>
                        <time dateTime="2021-06-14">14 June, 2021</time>
                        <div ref={textRef}>
                            <p>
                                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                lot of experience
                                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                consectetur adipiscing
                                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>
                    </div>
                </section>
            </div> */}
        </article>
    )
}

export default About