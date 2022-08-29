import React, {useState } from "react"
import useSWR from 'swr'
import { IoChevronDown, IoEyeOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Portfolio = () => {
    const projectCategory = [{id: 1, name: "All"},{id: 2,name: "React"}, {id: 3, name: "NodeJS"}, {id: 4, name: "Vanilla HTML"}, {id: 5, name: "Python"}, {id: 6, name: "Vue"}, {id: 7, name: "Laravel"}, {id: 8, name: "Others"}]
    const toastSetup = {position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined, theme: "dark"}
    
    const { data , error } = useSWR('/api/staticdata', fetcher)

    if (error) toast.error('Failed to load...', toastSetup)
    if (!data) toast.info('Loading Projects...', toastSetup)

    const parseData = JSON.parse(data)
    const setDisplay = parseData.map(p => ({...p, show: true }))
    
    const [projects, setProjects] = useState(setDisplay)
    const [click, setClick] = useState(false)
    const [selectValue, setSelectValue] = useState("Select category")
    const [clickColor, setClickColor] = useState("All")
    const {page} = useStateContext()
    
    const handleClick = (e) => {
        const selectedCategory = e.target.innerText
        setClick(false)
        setClickColor(selectedCategory)
        setSelectValue(selectedCategory)
        setProjects(projects.map(project => (selectedCategory === "All" || project.category === selectedCategory) ? {...project, show: true } : {...project, show: false }))
    }

    return (
        <article className={`portfolio ${page === "portfolio" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
                <ul className="filter-list">
                    {projectCategory.map((pc) => (
                        <li className="filter-item" key={pc.id}>
                            <button className={clickColor === pc.name ? "active" : ""} onClick={handleClick}>{pc.name}</button>
                        </li>
                    ))}
                </ul>

                <div className="filter-select-box">
                    <button className={`filter-select ${click ? "active" : ""}`} onClick={() => setClick(!click)}>
                        <div className="select-value">{selectValue}</div>
                        <div className="select-icon">
                            <IoChevronDown className="ion-icon"/>
                        </div>
                    </button>

                    <ul className="select-list">
                        {projectCategory.map((pc) => (
                            <li className="select-item" key={pc.id}> 
                                <button onClick={handleClick}>{pc.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="project-list">
                    {projects.map((project) => (
                        <li className={`project-item ${project.show ? "active" : ""}`} key={project.id}>
                            <a href={project.url}>
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IoEyeOutline className="ion-icon"/>
                                    </div>
                                    <img src={`/projectDemo/${project.img}`} alt={project.name.toLocaleLowerCase()} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <ToastContainer />
        </article>
    )
}

export default Portfolio