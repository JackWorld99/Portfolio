import { IoPaperPlane } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"

const Contact = () => {
    const {page} = useStateContext()

    return (
        <article className={`contact ${page === "contact" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe src="" width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                    </div>
                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <IoPaperPlane className="ion-icon"/>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    )
}

export default Contact