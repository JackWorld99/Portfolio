import React, { useState, } from "react"
import { useStateContext } from "../context/StateContext"

const Navbar = () => {
    const [links, setLink] = useState('about')
    const { setPage } = useStateContext()

    const handleClick = (e) => {
        setLink(e.target.innerHTML.toLowerCase())
        setPage(e.target.innerHTML.toLowerCase())
    }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "about" ? "active" : ""}`} onClick={handleClick}>About</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "resume" ? "active" : ""}`} onClick={handleClick}>Resume</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "portfolio" ? "active" : ""}`} onClick={handleClick}>Portfolio</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "blog" ? "active" : ""}`} onClick={handleClick}>Blog</button>
                </li>
                <li className="navbar-item">
                    <button className={`navbar-link ${links === "contact" ? "active" : ""}`} onClick={handleClick}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar