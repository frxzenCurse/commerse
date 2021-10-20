import PostItem from "./PostItem"
import { Empty } from 'antd';
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
          <Empty />
      }
    </div>
  )
}

export default PostList