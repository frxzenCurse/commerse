import { Form, Input, Button, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../redux/reducers/login/actionCreators';


const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { error, isLoading, isAuth } = useSelector(state => state.login)
  const { login, setError } = useActions(AuthActionCreators)

  const history = useHistory()

  function sumbitHandler() {
    login(username, password)
  }

  useEffect(() => {
    if (isAuth) {
      history.push(PRODUCTS)
      setError('')
    }
  }, [isAuth])

  return (
    <div>
      <Row justify='center' style={{ marginTop: 50, }}>
        <Form
          onFinish={sumbitHandler}
        >
          {error &&
            <div style={{ color: 'red', marginBottom: 10, }}>{error}</div>
          }
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            {...formItemLayout}
          >
            <Input type='email' value={username} onChange={e => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            {...formItemLayout}
          >
            <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              htmlType="submit"
              loading={isLoading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row >
    </div>
  )
}

export default Login