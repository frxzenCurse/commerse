import { Form, Input, Button, Row, Result } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { PRODUCTS } from '../data/pages';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../redux/reducers/login/actionCreators';
import { useSpring, animated } from 'react-spring';

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const { error, isLoading, isAuth } = useSelector(state => state.login)
  const { login, setError } = useActions(AuthActionCreators)

  const formProps = useSpring({
    config: { duration: 400 },
    x: isAuth ? -40 : 0,
    opacity: isAuth ? 0 : 1
  })
  const resultProps = useSpring({
    delay: 400,
    config: { duration: 400 },
    scale: isAuth ? 1.5 : 0
  })

  function sumbitHandler() {
    login(username, password)
  }

  useEffect(() => {
    if (isAuth) {
      setTimeout(() => {
        history.push(PRODUCTS)
      }, 1000)
      setError('')
    }
  }, [isAuth])

  return (
    <div>
      <Row justify='center' style={{ marginTop: 50, position: 'relative' }}>
        <animated.div style={formProps}>
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
        </animated.div>
        <div className='login-success'>
          <animated.div style={resultProps}>
            <Result
              status="success"
            />
          </animated.div>
        </div>
      </Row >
    </div>
  )
}

export default Login