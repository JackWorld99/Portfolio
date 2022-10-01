import React, {useRef, useState} from "react"
import { server } from '../config'
import { IoPaperPlane } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from "validator"
const disposable = require('disposable-email')

const Contact = () => {
    const {page} = useStateContext()
    const [message, setMessage] = useState("")
    const nameInput = useRef()
    const emailInput = useRef()
    const messageInput = useRef()
    
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

        nameInput.current.style.borderColor = null
        emailInput.current.style.borderColor = null
        messageInput.current.style.borderColor = null
        const borderColors = "var(--bittersweet-shimmer)"

        if(validateName){
            e.preventDefault()
            nameInput.current.focus()
            nameInput.current.style.borderColor = borderColors
            return inputError("Name is required")
        }

        if(isEmailEmpty){
            e.preventDefault()
            emailInput.current.focus()
            emailInput.current.style.borderColor = borderColors
            return inputError("Email is required")
        }

        if(validateMessage){
            e.preventDefault()
            messageInput.current.focus()
            messageInput.current.style.borderColor = borderColors
            return inputError("Message is required")
        }
        
        if(!validateEmail){
            e.preventDefault()
            emailInput.current.focus()
            emailInput.current.style.borderColor = borderColors
            return inputError("Please enter a valid email !")
        }

        const normalize = validator.normalizeEmail(email)
        const disposableEmail = disposable.validate(normalize)

        if(!disposableEmail) {
            e.preventDefault()
            emailInput.current.focus()
            emailInput.current.style.borderColor = borderColors
            return inputError("Please don't use disposable email !")
        }

        if(!validateName && !validateMessage && validateEmail && disposableEmail) {
            setMessage("⚠️ If the mail is not sent after 30 seconds, it could be the mail service provider has crashed, please send your mail directly to jackwong0326@gmail.com. Sorry for inconvenience.")
            toast.info("Be patient, the email is being sent...", waitingToast)
            toast.warning("Please don't refresh the page.", waitingToast)
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
                    <iframe src={process.env.NEXT_PUBLIC_LOCATION} width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Me</h3>
                {message && <p style={{color: "var(--vegas-gold)", marginBottom: "15px"}}><b>{message}</b></p>}
                <form className="form" action={process.env.NEXT_PUBLIC_EMAIL} method="POST" onSubmit={sendEmail} >
                    <div className="input-wrapper">
                        <input type="text" name="Name" className="form-input" placeholder="Name" ref={nameInput}/>
                        <input type="text" name="Email" className="form-input" placeholder="Email Address" ref={emailInput}/>
                    </div>
                    <textarea name="Message" className="form-input" placeholder="Your Message" ref={messageInput}></textarea>
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