import { Modal } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { LOGIN } from '../data/pages';

const MyModal = ({isModalVisible, onClick}) => {

  const history = useHistory()
  const context = useContext(ThemeContext)

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
      className={context === 'dark' ? 'modal-dark' : ''}
    >
      <p>Пожалуйста перейдите на страницу логина и войдите в ваш аккаунт</p>
    </Modal>
  )
}

export default MyModal