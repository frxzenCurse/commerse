import { List } from 'antd';

const Comment = ({ data }) => {

  return (
    <div>
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