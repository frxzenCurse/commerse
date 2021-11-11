import { Button, Card } from 'antd';
import { useHistory } from 'react-router';
import { POST } from '../data/pages';
import Fade from 'react-reveal/Fade';

const PostItem = ({ post, onClick }) => {

  const history = useHistory()

  function remove() {
    onClick(post.id)
  }

  return (
    <Fade bottom>
      <Card
        type="inner"
        title={post.title}
        extra={<Button onClick={() => history.push(POST + '/' + post.id)}>Подробнее</Button>}
        style={{ marginTop: 20, }}
      >
        <div>{post.body}</div>
        <Button
          onClick={remove}
          style={{ marginTop: 10 }}
        >
          Удалить пост
        </Button>
      </Card>
    </Fade>
  )
}

export default PostItem