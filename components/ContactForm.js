import React, {useRef, useState} from "react"
import { server } from '../config'
import { IoPaperPlane } from "react-icons/io5"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from "validator"
const disposable = require('disposable-email')

const ContactForm = () => {
    const [prompt, setPrompt] = useState("")
    const nameInput = useRef()
    const emailInput = useRef()
    const messageInput = useRef()
    
    const sendEmail = (e) => {
        const name = nameInput.current.value
        const message = messageInput.current.value
        const email = emailInput.current.value
        
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
            setPrompt("⚠️ If the mail is not sent after 30 seconds, it could be the mail service provider has crashed, please send your mail directly to jackwong0326@gmail.com. Sorry for inconvenience.")
            toast.info("Be patient, the email is being sent...", waitingToast)
            toast.warning("Please don't refresh the page.", waitingToast)
        }else{
            e.preventDefault() 
            return inputError("Something went wrong, please try again !")
        }
    }

    return (
        <>
            {prompt && <p style={{color: "var(--vegas-gold)", marginBottom: "15px"}}><b>{prompt}</b></p>}
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
            <ToastContainer />
        </>
    )
}

export default ContactForm