import { Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';

const PostForm = ({ isModalVisible, handleOk, closeModal}) => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')  

  function submitForm() {
    handleOk(title, body)
    setTitle('')
    setBody('')
  }

  console.log(title);
  console.log(body);

  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={submitForm} onCancel={closeModal}>
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
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="body"
          rules={[{ required: true, message: 'Пожалуйста введите описание поста' }]}
        >
          <Input value={body} onChange={e => setBody(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal >
  )
}

export default PostForm