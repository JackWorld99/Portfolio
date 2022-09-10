import React from "react"
import { server } from '../config'
import { IoPaperPlane } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from "validator"
const disposable = require('disposable-email')

const Contact = () => {
    const {page} = useStateContext()
    
    const sendEmail = (e) => {
        const name = e.target.Name.value
        const message = e.target.Message.value
        const email = e.target.Email.value
        
        const validateName = validator.isEmpty(name, { ignore_whitespace:true })
        const validateMessage = validator.isEmpty(message, { ignore_whitespace:true })
        const isEmailEmpty = validator.isEmpty(email, { ignore_whitespace:true })
        const validateEmail = validator.isEmail(email)
        
        const toastSetup = {position: "bottom-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"}
        const waitingToast = {position: "bottom-right", autoClose: false, hideProgressBar: true, closeOnClick: false, pauseOnHover: false, draggable: false, progress: undefined, theme: "dark"}
        const inputError = (errorMessage) => toast.error(errorMessage, toastSetup)

        if(validateName){
            e.preventDefault()
            return inputError("Name is required")
        }

        if(validateMessage){
            e.preventDefault()
            return inputError("Message is required")
        }

        if(isEmailEmpty){
            e.preventDefault()
            return inputError("Email is required")
        }

        if(!validateEmail){
            e.preventDefault()
            return inputError("Please enter a valid email !")
        }

        const normalize = validator.normalizeEmail(email)
        const disposableEmail = disposable.validate(normalize)

        if(!disposableEmail) {
            e.preventDefault()
            return inputError("Please don't use disposable email !")
        }

        if(!validateName && !validateMessage && validateEmail && disposableEmail) {
            e.target.Name.value = ""
            e.target.Message.value = ""
            e.target.Email.value = ""
            toast.info('Be patient, the email is being sent....', waitingToast)
            toast.warning("Please don't refresh the page", waitingToast)
        }else{
            e.preventDefault() 
            return inputError("Something went wrong, please try again !")
        }
    }

    return (
        <article className={`contact ${page === "contact" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox">
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127631.07988903335!2d103.69005504598817!3d1.4889118503384597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12c6d36b3a27%3A0xd5f4b21db593d4f5!2sJohor%20Bahru%2C%20Johor!5e0!3m2!1sen!2smy!4v1661781629979!5m2!1sen!2smy" width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Me</h3>
                <form className="form" action={process.env.NEXT_PUBLIC_EMAIL} method="POST" onSubmit={sendEmail} >
                    <div className="input-wrapper">
                        <input type="text" name="Name" className="form-input" placeholder="Name" />
                        <input type="text" name="Email" className="form-input" placeholder="Email Address"/>
                    </div>
                    <textarea name="Message" className="form-input" placeholder="Your Message"></textarea>
                    <input type="text" name="_honey" style={{display:"none"}} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={`${server}/success`}></input>
                    <button className="form-btn">
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