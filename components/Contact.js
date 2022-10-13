import React from "react"
import { useStateContext } from "../context/StateContext"
import ContactForm from './ContactForm'

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
                <ContactForm />
            </section>
        </article>
    )
}

export default Contact