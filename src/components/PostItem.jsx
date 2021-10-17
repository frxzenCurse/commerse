import { Button, Card } from 'antd';
import { useHistory } from 'react-router';
import { POST } from '../data/pages';

const PostItem = ({ post, onClick }) => {

  function remove() {
    onClick(post.id)
  }

  const history = useHistory()

  return (
    <div>
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
    </div>
  )
}

export default PostItem