import React, {useState} from "react"
import { IoChevronDown, IoEyeOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"
import useSWR from 'swr'

const Portfolio = () => {
    const {page} = useStateContext()
    const [click, setClick] = useState(false)
    const [selectValue, setSelectValue] = useState("Select category")
    const [triggerColor, setTriggerkColor] = useState("All")
    const [showAll, setShowAll] = useState(true)
    const {data} = useSWR('/api/staticdata')
    const parseData = JSON.parse(data)

    const handleClick = (e) => {
        const selectedCategory = e.target.innerText
        setClick(false)
        setShowAll(false)
        setTriggerkColor(selectedCategory)
        setSelectValue(selectedCategory)
    }

    return (
        <article className={`portfolio ${page === "projects" ? "active" : ""}`}>
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
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

                <ul className="project-list">
                    {parseData.repo.map(project => (
                        <li className={`project-item ${(showAll || selectValue === "All" || selectValue === project.category) ? "active" : "" }`} key={project.id}>
                            <a href={project.url}>
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IoEyeOutline className="ion-icon"/>
                                    </div>
                                    <img src={`/images/${project.img}`} alt={project.name.toLocaleLowerCase()} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}

export default Portfolio