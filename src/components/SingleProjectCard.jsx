import { Empty, Col, Row } from 'antd';
import ProjectInfo from './ProjectInfo';
import ThumbSlider from './ThumbSlider';

const SingleProjectCard = ({project}) => {


  return (
    <div className='single-project'>
      {project
        ?
        <>
          <div className='single-project__label'>{project.object_type.title}</div>
          <h1 className='single-project__title'>
            {project.title}
          </h1>
          <Row justify='space-between'>
            <Col span={12}>
              <ThumbSlider project={project} />
            </Col>
            <Col span={8}>
              <ProjectInfo project={project} />
            </Col>
          </Row>
          <div className='single-project__description'>
            {project.description}
          </div>
        </>
        :
        <Empty />
      }
    </div>
  )
}

export default SingleProjectCard