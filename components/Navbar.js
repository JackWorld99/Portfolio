import React, { useState, } from "react"
import { useStateContext } from "../context/StateContext"

const Navbar = () => {
    const [links, setLink] = useState('about')
    const { setPage } = useStateContext()

    const handleClick = (e) => {
        const lowerCase = e.target.innerText.toLowerCase()
        setLink(lowerCase)
        setPage(lowerCase)
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "about" ? "active" : ""}`} onClick={handleClick}>About</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "skills" ? "active" : ""}`} onClick={handleClick}>Skills</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "projects" ? "active" : ""}`} onClick={handleClick}>Projects</button>
                </li>
                {/* <li className="navbar-item">
                    <button className={`navbar-link ${links === "blog" ? "active" : ""}`} onClick={handleClick}>Blog</button>
                </li> */}
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "contact" ? "active" : ""}`} onClick={handleClick}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar