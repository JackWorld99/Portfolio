import React, {useRef, useState } from "react"
import { IoPaperPlane } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from "validator"
const MailChecker = require('mailchecker')
const disposable = require('disposable-email')
import HashLoader from "react-spinners/HashLoader"

const Contact = () => {
    const toastSetup = {position: "bottom-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"}
    const {page} = useStateContext()
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        
        const validateName = validator.isEmpty(name, { ignore_whitespace:true })
        const validateMessage = validator.isEmpty(message, { ignore_whitespace:true })
        const validateEmail = validator.isEmail(email)
        
        const inputError = (value) => toast.error(value + ' is required', toastSetup)

        if(validateName){return inputError("Name")}
        if(validateMessage){return inputError("Message")}

        if(!validateEmail) return toast.error('Please enter a valid email !', toastSetup)
        const normalize = validator.normalizeEmail(email)
        const disposableEmail = MailChecker.isValid(normalize) && disposable.validate(normalize)
        if(!disposableEmail) return toast.error("Please don't use disposable email !", toastSetup)

        setIsLoading(true)
        const emailDetails = {"Name": name, "Email": email, "Message": message, "_captcha": true, "_honey": "", "_template": "table"}
        if(!validateName && !validateMessage && validateEmail && disposableEmail) {
            fetch("https://formsubmit.co/ajax/eb1f59f740b3c141e8f7346e21d2e1ad", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(emailDetails)})
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    setIsLoading(false)
                    toast.success('Mail sent successfully !', toastSetup)
                    toast.info('Thanks, I will reply asap', toastSetup)
                }else{
                    setIsLoading(true)
                    toast.error('Something went wrong, please try again !', toastSetup)
                }
            })
            .catch(error => console.log(error))
        }else{toast.error('Something went wrong, please try again !', toastSetup)}
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
            <HashLoader color={"#ffdb70"} loading={isLoading} cssOverride={{display: "block", margin: "0 auto",borderColor: "red"}}/>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Me</h3>
                <form className="form" onSubmit={sendEmail}>
                    <div className="input-wrapper">
                        <input type="text" name="name" className="form-input" placeholder="Name" onChange = {e => setName(e.target.value)}/>
                        <input type="text" name="email" className="form-input" placeholder="Email Address" onChange = {e => setEmail(e.target.value)}/>
                    </div>
                    <textarea name="message" className="form-input" placeholder="Your Message" onChange = {e => setMessage(e.target.value)}></textarea>
                    <input type="text" name="_honey" style={{display:"none"}} />
                    <input type="hidden" name="_template" value="table" />
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