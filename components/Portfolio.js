import React, {useState} from "react"
import { IoChevronDown, IoEyeOutline, IoCloseOutline, IoLogoGithub } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import useSWR from 'swr'

const Portfolio = () => {
    const {page} = useStateContext()
    const [click, setClick] = useState(false)
    const [selectValue, setSelectValue] = useState("All")
    const [controlModal, setControlModall] = useState({toggleModal: false, overlayModal: false})
    const [modelDes, setModelDes]  = useState([])
    const {data} = useSWR('/api/staticdata')
    const parseData = JSON.parse(data)

    const handleClick = (e) => {
        const selectedCategory = e.target.innerText
        setClick(false)
        setSelectValue(selectedCategory)
    }

    const handleProjectClick = (name) => {
        parseData.repo.filter(i => i.name == name).map(j => setModelDes({pName: name, description: j.description, url: j.url}))
        modal()
    }

    const modal = () => {
        setControlModall({toggleModal: !controlModal.toggleModal, overlayModal: !controlModal.overlayModal})
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
                            <button className={selectValue === pc.name ? "active" : ""} onClick={handleClick}>{pc.name}</button>
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
                <ul className="project-list">
                    {parseData.repo.map(project => (
                        <li className={`project-item ${(selectValue === "All" || selectValue === project.category) ? "active" : "" }`} key={project.id} onClick={()=>handleProjectClick(project.name)}>
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
            <div className={`modal-container ${controlModal.toggleModal ? "active" : ""}`} >
                <div className={`overlay ${controlModal.overlayModal ? "active" : ""}`} onClick={modal}></div>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" onClick={modal}>
                        <IoCloseOutline className="ion-icon"/>
                    </button>
                    <div className="modal-content">
                        <h4 className="h3 modal-title">{modelDes.pName}</h4>
                        <p style={{marginTop:"10px"}}><b>Description</b></p>
                        <p>{modelDes.description}</p>
                         <a href={modelDes.url} >
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