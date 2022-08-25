import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5"

const Sidebar = () => {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src="/images/my-avatar.png" alt="xxx" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="xxx">xxx</h1>
                    <p className="title">Web developer</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn>
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
                            <a href="mailto:richard@example.com" className="contact-link">richard@example.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoPhonePortraitOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoCalendarOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="1982-06-23">June 23, 1982</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <IoLocationOutline className="ion-icon"/>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Sacramento, California, USA</address>
                        </div>
                    </li>
                </ul>
                <div className="separator"></div>
                <ul className="social-list">
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <IoLogoFacebook className="ion-icon"/>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <IoLogoTwitter className="ion-icon"/>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <IoLogoInstagram className="ion-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar