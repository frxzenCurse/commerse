import { Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 150, color: 'blue' }} spin />;

const Loader = () => {
  return (
    <Row style={{ height: '80vh', }} justify='center' align='middle'>
      <Spin indicator={antIcon} />
    </Row>
  )
}

export default Loader