
const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <div className='project-card__container'>
        {project.images.length 
          ?
          <img className='project-card__img' src={'https://api.d4u.dev.dterra.eu/public' + project.imgMain.img} alt="" />
          :
          null
        }
        {project.imgCnt
          ?
          <div className='project-card__label'>
            {project.imgCnt} фото
          </div>
          :
          null
        }
      </div>
      <div className='project-card__type'>
        {project.building_type.title}
      </div>
      <div className='project-card__title'>
        {project.title}
      </div>
      <div className='project-card__designer'>
        {project.designer.name && project.designer.name} {project.designer.surname && project.designer.surname}
      </div>
    </div>
  )
}

export default ProjectCard