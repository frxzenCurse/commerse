import { Button, Form, Input, Modal } from 'antd';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const PostForm = ({ isModalVisible, handleOk, closeModal }) => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const ref = useRef()
  const context = useContext(ThemeContext)

  function submitForm() {
    setTitle('')
    setBody('')
    handleOk(title, body)
    ref.current.resetFields()
  }

  return (
    <Modal
      title='Введите данные'
      visible={isModalVisible}
      onCancel={closeModal}
      footer={null}
      className={context === 'dark' ? 'modal-dark' : ''}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={submitForm}
        ref={ref}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" type={context === 'light' ? 'light' : 'primary'}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  )
}

export default PostForm