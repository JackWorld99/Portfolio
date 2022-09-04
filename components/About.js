import React, {useRef, useState} from "react"
import { IoMdDownload } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
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
                    Hi, I&apos;m Wei Jian, you can me Jack as well. I&apos;m a rookie fresh out of Software Engineering. I&apos;m an ordinary person, a delusional person who wants to change the world with code.
                </p>
                <p>
                    I&apos;m a inquisitive person, and when I come across a new technology or a better code algorithm, I try to find as much information as I can. I love reading books because they contain the experience and wisdom of different authors who have spent their entire lives condensing them into one book. I was often troubled by finding books, so I developed a book-scraping application. I used to stay up all day and night to study web scraping. I am the kind of person who will forget to sleep and eat when I find something new and interesting. It sounds crazy. , but I feel very satisfied when the library is developed, I enjoy the feeling of finding problems in life and turning ideas into reality. I love challenges and learning, and I enjoy the process of going from noob to proficient. Learn new things and go in different directions. Because of this, I know a little bit of everything but not proficient. I am dedicated to making complex things simple. I don&apos;t like to waste time, I always want to use the shortest time to get things done, and then leave the rest of the time for myself to do what I want to do. After all, life is too short and my motto is to be happy and enjoy life every day. <br/>
                </p>
                <p>
                    I&apos;m a inquisitive person, when I encounter new technologies or better code algorithms, I will research day and night to find as much information as possible. I love reading books because they contain the experience and wisdom of different authors who have spent their entire lives condensing them into one book. I was often troubled by finding books, so I developed a book-scraping application. I used to stay up all day and night to study web scraping. I am the kind of person who will forget to sleep and eat when I find something new and interesting. It sounds crazy. , but I feel very satisfied when the library is developed, I enjoy the feeling of finding problems in life and turning ideas into reality. I love challenges and learning, and I enjoy the process of going from noob to proficient. Learn new things and go in different directions. Because of this, I know a little bit of everything but not proficient. I am committed to making complex things simple, the simpler the better. I don&apos;t like to waste time, I always want to use the shortest time to get things done, and then leave the rest of the time for myself to do what I want to do. After all, life is too short and my motto is to be happy and enjoy life every day.
                {/* 我是一个富有好奇心的人， 遇到新技术或是有更好用的代码算法时，我会尽可能地搜寻更多的信息。我喜欢看书，因为书里涵盖个个不同作者的经验与智慧，他们花了一生的时间将其浓缩成一本书。常常为了找书而苦恼，于是我开发了个抓书应用，为了研究web scraping我曾经一日一夜没睡，我是那种发现好玩的新东西就会废寝忘食的那种人，听起来蛮疯狂的，但当图书馆开发好后我感到非常有满足感，我享受那种在生活中发现问题并将脑子里想法变成现实的感觉。我喜欢挑战喜欢学习，我享受从一窍不通到精通的过程。学习新事物并朝不同方向发展。因为这样以至于我什么都懂一点但是都不精通。我致力于将复杂的东西变简单。我不喜欢浪费时间，我总想着用最短的时间做把事情完成，然后将剩下的时间留给自己做自己想做的事。毕竟人生苦短我的座右铭就是天天开心享受人生。 */}
                {/* 我是一个平凡人，一个痴心妄想，想靠代码改变世界的人。 */}
                </p>
                <button className="form-btn">
                    <IoMdDownload className="ion-icon"/>
                    <span>CV</span>
                </button>
            </section>
            <section className="service">
                <h3 className="h3 service-title">Expected Career</h3>
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
            </section>
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
            {/* <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="#">
                            <img src="/images/logo-1-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/images/logo-2-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/images/logo-3-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/images/logo-4-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/images/logo-5-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="/images/logo-6-color.png" alt="client logo" />
                        </a>
                    </li>
                </ul>
            </section> */}
        </article>
    )
}

export default About