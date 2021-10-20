import { Form, Input, Button, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../redux/reducers/login/actionCreators';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { error, isLoading, isAuth } = useSelector(state => state.login)
  const { login } = useActions(AuthActionCreators)

  const history = useHistory()

  function sumbitHandler() {
    login(username, password)
  }

  useEffect(() => {
    if (isAuth) {
      history.push(PRODUCTS)
    }
  }, [isAuth])

  return (
    <Row justify='center' style={{ marginTop: 50, }}>
      <Form
        onFinish={sumbitHandler}
      >
        {error &&
          <div style={{ color: 'red', marginBottom: 10, }}>{error}</div>
        }
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row >
  )
}

export default Login