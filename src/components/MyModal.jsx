import { Modal } from 'antd';
import { useHistory } from 'react-router';
import { LOGIN } from '../data/pages';

const MyModal = ({isModalVisible, onClick}) => {

  const history = useHistory()

  function redirect() {
    history.push(LOGIN)
    onClick()
  }

  return (
    <Modal 
      title="Вы не авторизованы" 
      visible={isModalVisible}
      onCancel={onClick} 
      onOk={redirect} 
    >
      <p>Пожалуйста перейдите на страницу логина и войдите в ваш аккаунт</p>
    </Modal>
  )
}

export default MyModal