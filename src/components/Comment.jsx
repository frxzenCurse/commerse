import { List } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Comment = ({ data }) => {

  const context = useContext(ThemeContext)

  return (
    <div className={context === 'dark' ? 'list-dark' : ''}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<div>{item.name}</div>}
              description={item.body}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Comment