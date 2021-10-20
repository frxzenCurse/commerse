import { Button, Card } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { POST } from '../data/pages';
import { ThemeContext } from '../context/ThemeContext';
import Fade from 'react-reveal/Fade';

const PostItem = ({ post, onClick }) => {

  const context = useContext(ThemeContext)
  const history = useHistory()

  function remove() {
    onClick(post.id)
  }

  return (
    <div className={context === 'dark' ? 'card-dark' : ''}>
      <Fade bottom>
        <Card
          type="inner"
          title={post.title}
          extra={<Button type={context === 'light' ? 'light' : 'primary'} onClick={() => history.push(POST + '/' + post.id)}>Подробнее</Button>}
          style={{ marginTop: 20, }}
        >
          <div>{post.body}</div>
          <Button
            onClick={remove}
            style={{ marginTop: 10 }}
            type={context === 'light' ? 'light' : 'primary'}
          >
            Удалить пост
          </Button>
        </Card>
      </Fade>
    </div>
  )
}

export default PostItem