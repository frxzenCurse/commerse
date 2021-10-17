import { Form, Input, Modal } from 'antd';

const PostForm = ({ isModalVisible, handleOk, closeModal, title, body, bodyChange, titleChange }) => {

  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')  

  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={closeModal}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Заголовок"
          name="title"
          rules={[{ required: true, message: 'Пожалуйста введите заголовок поста' }]}
        >
          <Input value={title} onChange={titleChange} />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="body"
          rules={[{ required: true, message: 'Пожалуйста введите описание поста' }]}
        >
          <Input value={body} onChange={bodyChange} />
        </Form.Item>
      </Form>
    </Modal >
  )
}

export default PostForm