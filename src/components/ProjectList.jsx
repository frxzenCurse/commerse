import ProjectCard from "./ProjectCard"
import { Empty } from 'antd';

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list'>
      {projects.length
        ?
        <>
          {projects.map(project =>
            <ProjectCard key={project.id} project={project} />
          )}
          
        </>
        :
        <div className='empty-container'>
          <Empty />
        </div>
      }
    </div>
  )
}

export default ProjectList

