import React from 'react'
import { projectsData } from './Data'
import './Projects.scss'

function Projects() {
    return (
        <div className="projectsPage row">
            <div className="container">
                <section className="projects">
                    <div className="items-list">
                    {
                        projectsData.map(project => {
                            return (
                                <article className="item">
                                    <h2 className="item-name">{ project.name }</h2>
                                    <p className="item-text">{ project.description }</p>         
                                    <p className="item-tags">{ project.tags }</p>
                                    <p className="item-tags">{ project.country }</p>
                                    <ul>
                                        { project.mockup ? <li><a href={ project.mockup } target="_blank" rel="noopener noreferrer">Boceto</a></li> : null }
                                        { project.link ? <li><a href={ project.link } target="_blank" rel="noopener noreferrer">Visitar sitio</a></li> : null }
                                    </ul>
                                </article>
                            )
                        })
                    }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects
