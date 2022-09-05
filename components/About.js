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
                    Hi, I&apos;m Wei Jian, you can call me Jack as well. I&apos;m a rookie fresh out of Software Engineering. I&apos;m an ordinary person, a delusional person who wants to change the world with code.
                </p>
                <p>
                    I&apos;m a inquisitive person, When I encounter new technologies or better code algorithms, I will research day and night to find as much information as possible. I love reading books because they contain the experience and wisdom of different authors who have spent their entire lives condensing them into one book. I often worry about finding books. In order to solve this problem, I have the idea of developing a book scraping application. In order to study web scraping, I used to stay up all day and night. I&apos;m the type of person who loses sleep when I find something new that interests me, it sounds crazy, but it brings me great satisfaction when a vexing problem is solved. 
                </p>
                <p>
                    I enjoy the process of finding problems in life and turning my thoughts and ideas into reality. I love challenges and learning, and I enjoy the process of going from noob to proficient. Learn new things and go in different directions. Because of this, I know a little bit of everything but not proficient. I&apos;m committed to making complex things simple, the simpler the better. I don&apos;t like wasting time, I always try to get things done in the shortest time, and then leave the rest of the time for myself to do what I want to do. After all, life is short and it&apos;s not easy to find what you love to do and stick to what you like. My motto is to be happy and enjoy life every day.
                    {/* 我是一个富有好奇心的人， 遇到新技术或是有更好代码算法时，我会没日没夜的研究尽可能地搜寻更多的信息。我喜欢看书，因为书里涵盖个个不同作者的经验与智慧，他们花了一生的时间将其浓缩成一本书。常常为了找书而苦恼，为了解决这个问题有了开发抓书应用的想法，为了研究web scraping我曾经一日一夜没睡。我是那种发现自己感兴趣的新东西时就会废寝忘食的那种人，听起来蛮疯狂的，但当苦恼的问题解决后，我感到非常有满足感。我享受那种在生活中发现问题并将脑子里想法在浏览器中变成现实的过程。我喜欢挑战喜欢学习，我享受从一窍不通到精通的过程。学习新事物并朝不同方向发展。因为这样以至于我什么都懂一点但是都不精通。我致力于将复杂的东西变简单，对越简单越好。我不喜欢浪费时间，我总想着用最短的时间把事情完成，然后将剩下的时间留给自己做自己想做的事。毕竟人生苦短，找到自己喜欢做的事和坚持自己喜欢的事并不容易，我的座右铭就是天天开心享受人生。 */}
                    {/* 我是一个平凡人，一个痴心妄想，想靠代码改变世界的人。 */}
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