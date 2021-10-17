import { List } from 'antd';

const Comment = ({ data }) => {
  return (
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
  )
}

export default Comment