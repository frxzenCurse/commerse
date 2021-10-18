import { Button, Card } from 'antd';
import { useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';
import Comment from './Comment'

const { Meta } = Card;

const SinglePost = ({ post, img, pageId }) => {

  const [comments, setComments] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

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
  )
}

export default SinglePost