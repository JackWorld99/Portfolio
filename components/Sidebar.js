// import { IonIcon } from '@ionic/react'
// import { chevronDown, mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoFacebook, logoTwitter, logoInstagram } from 'ionicons'

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
                    {/* <IonIcon icon={chevronDown} /> */}
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <IonIcon icon={mailOutline} /> */}
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:richard@example.com" className="contact-link">richard@example.com</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <IonIcon icon={phonePortraitOutline} /> */}
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+12133522795" className="contact-link">+1 (213) 352-2795</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <IonIcon icon={calendarOutline} /> */}
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="1982-06-23">June 23, 1982</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            {/* <IonIcon icon={locationOutline} /> */}
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
                            {/* <IonIcon icon={logoFacebook} /> */}
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            {/* <IonIcon icon={logoTwitter} /> */}
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            {/* <IonIcon icon={logoInstagram} /> */}
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar