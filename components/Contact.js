import React from "react"
import { IoPaperPlane } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import validator from "validator"
const MailChecker = require('mailchecker')
const disposable = require('disposable-email')
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const {page} = useStateContext()
    const sendEmail = (e) => {
        e.preventDefault()
        try{
            const name = e.target.Name.value
            const message = e.target.Message.value
            const email = e.target.Email.value
            const inputError = (value) => {
                toast.error(value + ' is required', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            }
            if(validator.isEmpty(name,{ ignore_whitespace:true })){inputError("Name")}
            if(validator.isEmpty(message)){inputError("Message")}
            if(!validator.isEmail(email)) throw ""
            const normalize = validator.normalizeEmail(email)
            if(!(MailChecker.isValid(normalize) && disposable.validate(normalize))) throw ""
            toast.success('Mail sent successfully !', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
            toast.info('Thanks, I will reply asap', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        }catch(e){
            toast.error('Please enter a valid email !', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        }
    }

    return (
        <article className={`contact ${page === "contact" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox">
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127628.9681390175!2d103.67838207235523!3d1.5249482714950149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12c6d36b3a27%3A0xd5f4b21db593d4f5!2sJohor%20Bahru%2C%20Johor!5e0!3m2!1sen!2smy!4v1661698829360!5m2!1sen!2smy" width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Me</h3>
                <form className="form" onSubmit={sendEmail}>
                    <input type="text" name="_honey" style={{display:"none"}}/>
                    <input type="hidden" name="_template" value="table"/>
                    <div className="input-wrapper">
                        <input type="text" name="Name" className="form-input" placeholder="Name"/>
                        <input type="text" name="Email" className="form-input" placeholder="Email Address"/>
                    </div>
                    <textarea name="Message" className="form-input" placeholder="Your Message"></textarea>
                    <button className="form-btn" type="submit">
                        <IoPaperPlane className="ion-icon"/>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
            <ToastContainer />
        </article>
    )
}

export default Contact