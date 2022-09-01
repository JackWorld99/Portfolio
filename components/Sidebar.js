import React, { useState } from "react"
import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"
import { MdLanguage } from "react-icons/md"

const Sidebar = () => {
    const [click, setClick] = useState(false)

    return ( 
        <aside className={`sidebar ${click ? "active" : ""}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src="/images/my-avatar.png" alt="My avatar" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Wong Wei Jian">Wong Wei Jian</h1>
                    <div className="info-content-title">
                        <p className="title">Software Engineering</p>
                        <p className="title">Fresh Graduate</p>
                    </div>
                </div>
                <button className="info_more-btn" onClick={() => setClick(!click)}>
                    <span>Show Contacts</span>
                    <IoChevronDown className="ion-icon"/>
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoMailOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:jackwong0326@gmail.com" className="contact-link">jackwong0326@gmail.com</a>
                        </div>
                    </li>
                    {/* <li className="contact-item">
                        <div className="icon-box">
                            <IoPhonePortraitOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
                        </div>
                    </li> */}
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoCalendarOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="1982-06-23">March 26, 1999</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoLocationOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Johor Bahru, <br/>Johor, Malaysia</address>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <MdLanguage className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Language</p>
                            <p>English, Chinese, Malay</p>
                        </div>
                    </li>
                </ul>
                <div className="separator"></div>
                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/wong-wei-jian" className="social-link">
                            <IoLogoLinkedin className="ion-icon"/>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/JackWorld99" className="social-link">
                            <IoLogoGithub className="ion-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar