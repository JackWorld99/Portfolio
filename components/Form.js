import React, {useCallback, useRef, useState} from "react"
import { server } from '../config'
import { IoPaperPlane } from "react-icons/io5"
import { ToastContainer, toast } from 'react-toastify'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import 'react-toastify/dist/ReactToastify.css'
import validator from "validator"
import HashLoader from "react-spinners/HashLoader";
const disposable = require('disposable-email')

const Form = () => {
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [prompt, setPrompt] = useState("")
    const [email, setEmail] = useState({})
    const [loading, setLoading] = useState(false)
    const nameInputError = useRef()
    const emailInputError = useRef()
    const messageInputError = useRef()

    const sendEmail = async(e) => {
        e.preventDefault()
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

        nameInputError.current.style.borderColor = null
        emailInputError.current.style.borderColor = null
        messageInputError.current.style.borderColor = null
        const borderColors = "var(--bittersweet-shimmer)"

        if(validateName){
            nameInputError.current.focus()
            nameInputError.current.style.borderColor = borderColors
            return inputError("Name is required")
        }

        if(isEmailEmpty){
            emailInputError.current.focus()
            emailInputError.current.style.borderColor = borderColors
            return inputError("Email is required")
        }

        if(validateMessage){
            messageInputError.current.focus()
            messageInputError.current.style.borderColor = borderColors
            return inputError("Message is required")
        }
        
        if(!validateEmail){
            emailInputError.current.focus()
            emailInputError.current.style.borderColor = borderColors
            return inputError("Please enter a valid email !")
        }

        const normalize = validator.normalizeEmail(email)
        const disposableEmail = disposable.validate(normalize)

        if(!disposableEmail) {
            emailInputError.current.focus()
            emailInputError.current.style.borderColor = borderColors
            return inputError("Please don't use disposable email !")
        }

        if(!validateName && !validateMessage && validateEmail && disposableEmail) {
            setLoading(true)
            setPrompt("⚠️ If the mail is not sent after 30 seconds, it could be the mail service provider has crashed, please send your mail directly to jackwong0326@gmail.com. Sorry for inconvenience.")
            toast.info("Be patient, the email is being sent...", waitingToast)
            toast.warning("Please don't refresh the page.", waitingToast)
            setEmail((prev)=>({...prev, name: name, message: message, email: email}))
            handleReCaptchaVerify()
        }else{
            return inputError("Something went wrong, please try again !")
        }
    }

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
          console.log('Execute recaptcha not yet available')
          return;
        }
        const token = await executeRecaptcha("enquiryFormSubmit")
        submitEnquiryForm(token)
    }, [executeRecaptcha])

    const submitEnquiryForm = async (token) => {
        const res = await fetch("/api/email", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({gRecaptchaToken: token})
        })

        const result = await res.json()

        if(result.status === "success"){        
            const datas = {"Name": email.name, "Message": email.message, "Email": email.email, "_honey": "", "_template": "table"}
            const emailRes = await fetch(process.env.NEXT_PUBLIC_EMAIL_AJAX, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(datas)
            })

            const json = await emailRes.json()

            if(json.success){ 
                setPrompt("")
                setLoading(false)
                location.href = `${server}/success`
            }else{
                return inputError("Something went wrong, please try again !")
            }
        }else{
            return inputError("Google ReCaptcha Failure, please try again !")
        }
    }

    return (
       <>
            {prompt && <p style={{color: "var(--vegas-gold)", marginBottom: "15px"}}><b>{prompt}</b></p>}
            <form className="form" onSubmit={sendEmail} >
                <div className="input-wrapper">
                    <input type="text" name="Name" className="form-input" placeholder="Name" ref={nameInputError}/>
                    <input type="text" name="Email" className="form-input" placeholder="Email Address" ref={emailInputError}/>
                </div>
                <textarea name="Message" className="form-input" placeholder="Your Message" ref={messageInputError}></textarea>
                <input type="text" name="_honey" style={{display:"none"}} />
                <button className="form-btn">
                    <IoPaperPlane className="ion-icon"/>
                    <span>Send Message</span>
                </button>
                {loading && (<div style={{marginTop: "20px", color: "#ffdb70", display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <HashLoader color="#ffdb70" loading={loading} size={30} />&emsp;<span style={{fontSize: "var(--fs-4)"}}>Loading...</span>
                </div>)}
            </form>
            <ToastContainer />
        </>
    )
}

export default Form