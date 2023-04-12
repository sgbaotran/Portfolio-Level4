import './Project_2.css'
import projectItems from '../data/projects.json'


export default function Project() {
    const projects = projectItems.map(projectItem => {
        return (
            <div class="card">
                <div class="card__content">

                    <div class="card__front">
                        <h2 class="card__title">{projectItem.name}</h2>
                        <p class="card__subtitle">{projectItem.description}</p>
                    </div>

                    <div class="card__back">
                        <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
                    </div>

                </div>
            </div>
        )
    })


    return (

        <>
            <h2 className='project-title text-center text-white' >PROJECTS</h2>

            <div className='container mx-auto projects'>
                {projects}
            </div>

        </>

    )
}