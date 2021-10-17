import { Button, Card } from 'antd';

const PostItem = ({post, onClick}) => {

  function remove() {
    onClick(post.id)
  }

  return (
    <div>
      <Card type="inner" title={post.title} extra={<a href="#">More</a>} style={{marginTop: 20,}}>
        <div>{post.body}</div>
        <Button 
          onClick={remove}
          style={{marginTop: 10}}
        >
          Удалить пост
        </Button>
      </Card>
    </div>
  )
}

export default PostItem