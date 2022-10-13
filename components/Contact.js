import React from "react"
import { useStateContext } from "../context/StateContext"
import { GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
// import ContactForm from './ContactForm'
import Form from './Form'

const Contact = () => {
    const {page} = useStateContext()

    return (
        <article className={`contact ${page === "contact" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="mapbox">
                <figure>
                    <iframe src={process.env.NEXT_PUBLIC_LOCATION} width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Me</h3>
                <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_SITE_KEY}  scriptProps={{ async: false, defer: false, appendTo: "head", nonce: undefined, }}>
                    <Form />
                </GoogleReCaptchaProvider>
                {/* <ContactForm /> */}
            </section>
        </article>
    )
}

export default Contact