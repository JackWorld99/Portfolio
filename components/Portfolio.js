import React, {useState } from "react"
import { IoChevronDown, IoEyeOutline } from "react-icons/io5"
import { useStateContext } from "../context/StateContext"

const Portfolio = () => {
    const projectCategory = [{id: 1, name: "All"},{id: 2,name: "Web Design"}, {id: 3, name: "Applications"}, {id: 4, name: "Web Development"}]
    const [projects, setProjects] = useState([
        {id: 1, name: "Finance", category: "Web Development", image:"project-1.jpg", show: true},
        {id: 2, name: "Orizon", category: "Web Development", image:"project-2.png", show: true},
        {id: 3, name: "Fundo", category: "Web Design", image:"project-3.jpg", show: true},
        {id: 4, name: "Brawlhalla", category: "Applications", image:"project-4.png", show: true},
        {id: 5, name: "DSM.", category: "Web Design", image:"project-5.png", show: true},
        {id: 6, name: "MetaSpark", category: "Web Design", image:"project-6.png", show: true},
        {id: 7, name: "Summary", category: "Web Development", image:"project-7.png", show: true},
        {id: 8, name: "Task Manager", category: "Applications", image:"project-8.jpg", show: true},
        {id: 9, name: "Arrival", category: "Web Development", image:"project-9.png", show: true},
    ])
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
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IoEyeOutline className="ion-icon"/>
                                    </div>
                                    <img src={`/images/${project.image}`} alt={project.name.toLocaleLowerCase()} loading="lazy" />
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