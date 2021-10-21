import { Button, Card } from 'antd';
import { useContext, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';
import Comment from './Comment'
import { ThemeContext } from '../context/ThemeContext';

const { Meta } = Card;

const SinglePost = ({ post, img, pageId }) => {

  const [comments, setComments] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const context = useContext(ThemeContext)

  const [fetchComments, isLoading, error] = useFetching(async () => {
    const response = await PostService.getComments(pageId)

    setComments(response.data)
  })

  function commentsToggle() {
    if (isLoaded) {
      setComments([])
      setIsLoaded(!isLoaded)
    } else {
      fetchComments()
      setIsLoaded(!isLoaded)
    }
  }

  return (
    <div className={context === 'dark' ? 'card-dark' : ''}>
      <Card
        style={{ marginBottom: 30 }}
        type='inner'
        cover={
          <img
            style={{ width: 300, height: 300, }}
            src={img}
            alt=''
          />
        }
      >
        <Meta
          title={post.title}
          description={post.body}
        />

        <div style={{ margin: 10 }}>
          <Button
            onClick={commentsToggle}
            loading={isLoading}
            block
            type={context === 'light' ? 'light' : 'primary'}
          >
            {isLoaded ? 'Закрыть комментарии' : 'Открыть комментарии'}
          </Button>
          {error && <h1 style={{ color: 'red' }}>{error}</h1>}
          {comments.length
            ?
            <Comment data={comments} />
            :
            ""
          }
        </div>
      </Card>
    </div>
  )
}

export default SinglePost