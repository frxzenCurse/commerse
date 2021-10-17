import PostItem from "./PostItem"
import { Typography } from 'antd';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({posts, removePost}) => {
  return (
    <div>
      {posts.length 
        ?
          <TransitionGroup className="post-list">
            {posts.map(post => 
              <CSSTransition 
                key={post.id}
                timeout={1500}
                classNames="item"
              >
                <PostItem  post={post} onClick={removePost} />
              </CSSTransition>
            )}
          </TransitionGroup>
        :
          <Typography.Title style={{ marginLeft: 10, }}>Постов пока нет!</Typography.Title>
      }
    </div>
  )
}

export default PostList