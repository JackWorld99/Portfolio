import React, {useRef, useState} from "react"
import { IoCloseOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"

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
                    I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy
                    turning complex problems into simple, beautiful and intuitive designs.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I
                    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your
                    message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What i&apos;m doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="/images/icon-design.svg" alt="design icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="/images/icon-dev.svg" alt="Web development icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="/images/icon-app.svg" alt="mobile app icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>
                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="/images/icon-photo.svg" alt="camera icon" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>
                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="testimonials">
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
            </div>
            <section className="clients">
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
            </section>
        </article>
    )
}

export default About