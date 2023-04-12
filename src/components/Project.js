import './Project.css'
import projectItems from '../data/projects.json'


export default function Project(){
    const projects = projectItems.map(projectItem =>{
        return (
            <div className='project-item mb-10'>
                <img src={require(`../media/${projectItem.image}`)} alt='' className=' project-image'></img>
                <div className='not-image'>
                    <h2 className='project-name text-center my-2 text-xl'>{projectItem.name  }</h2>
                    <p className='project-description text-slate-700'>{projectItem.description}</p>
                </div>
            </div>
        )
    })


    return(
    
    <>
        <h2 className='project-title text-center text-white' >PROJECTS</h2>
        <div className='container mx-auto projects'>
            {projects}
        </div>
    
    </>

    )
}