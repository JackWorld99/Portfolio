import React, {useState} from "react"
import { IoChevronDown, IoEyeOutline, IoCloseOutline, IoLogoGithub } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import useSWR from 'swr'

const Portfolio = () => {
    const {page} = useStateContext()
    const [click, setClick] = useState(false)
    const [selectValue, setSelectValue] = useState("Select category")
    const [triggerColor, setTriggerkColor] = useState("All")
    const [showAll, setShowAll] = useState(true)
    const [toggleModal, setToggleModal] = useState(false)
    const [overlayModal, setOverlayModal] = useState(false)
    const [description, setDescription]  = useState()
    const [name, setName]  = useState()
    const [url, setUrl]  = useState()
    const {data} = useSWR('/api/staticdata')
    const parseData = JSON.parse(data)

    const handleClick = (e) => {
        const selectedCategory = e.target.innerText
        setClick(false)
        setShowAll(false)
        setTriggerkColor(selectedCategory)
        setSelectValue(selectedCategory)
    }

    const handleProjectClick = (name) => {
        setName(name)
        parseData.repo.forEach(p => {
            if(p.name == name){
                setUrl(p.url)
                setDescription(p.description)
            }
        })
        modal()
    }

    const modal = () => {
        setToggleModal(!toggleModal)
        setOverlayModal(!overlayModal)
    }

    return (
        <article className={`portfolio ${page === "projects" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Projects</h2>
            </header>
            <section className="projects">
                <ul className="filter-list">
                    {parseData.projectCategory.map(pc => (
                        <li className="filter-item" key={pc.id}>
                            <button className={triggerColor === pc.name ? "active" : ""} onClick={handleClick}>{pc.name}</button>
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
                        {parseData.projectCategory.map(pc => (
                            <li className="select-item" key={pc.id}> 
                                <button onClick={handleClick}>{pc.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="project-list" >
                    {parseData.repo.map(project => (
                        <li className={`project-item ${(showAll || selectValue === "All" || selectValue === project.category) ? "active" : "" }`} key={project.id} onClick={()=>handleProjectClick(project.name)}>
                            <a>
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IoEyeOutline className="ion-icon"/>
                                    </div>
                                    <img src={`/images/${project.img}`} alt={project.name} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <div className={`modal-container ${toggleModal ? "active" : ""}`} >
                <div className={`overlay ${overlayModal ? "active" : ""}`} onClick={modal}></div>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" onClick={modal}>
                        <IoCloseOutline className="ion-icon"/>
                    </button>
                    <div className="modal-content">
                        <h4 className="h3 modal-title">{name}</h4>
                        <p style={{marginTop:"10px"}}><b>Description</b></p>
                        <p>{description}</p>
                         <a href={url} >
                            <button type="button" width="300px" className="success-btn" style={{marginTop:"15px"}}>
                                <IoLogoGithub/>Github
                            </button>
                        </a>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Portfolio