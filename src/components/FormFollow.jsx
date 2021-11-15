import { CheckOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormFollow = () => {

  const {handleSubmit, register, reset, formState: {errors, isSubmitSuccessful}} = useForm()

  const onSubmit = data => console.log(data)

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form className='form' action="/" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__row">
        <div className="form__col">
          <div className="form__item">
            <input 
              className={errors.name ? 'form__input error' : 'form__input'} 
              type="text" 
              {...register('name', {required: true})}
              placeholder="Имя"
            />
            {errors.name && <div className="error-message">Поле обязательно для заполнения</div>}
          </div>
          <div className="form__item">
            <input 
              className={errors.phone ? 'form__input error' : 'form__input'} 
              type="text" 
              {...register('phone', {required: true, valueAsNumber: true})}
              placeholder="Телефон"
            />
            {errors.phone && <div className="error-message">Поле обязательно для заполнения</div>}
          </div>
        </div>
        <div className="form__col">
          <textarea 
            className={errors.textarea ? 'form__textarea error' : 'form__textarea'} 
            {...register('textarea', {required: true})}
            placeholder="Ваше сообщение"
          >
          </textarea>
          {errors.textarea && <div className="error-message">Поле обязательно для заполнения</div>}
        </div>
      </div>
      <div className="form__inner">
        <label className={errors.checkbox ? 'checkbox error' : 'checkbox'} >
          <input 
            className="checkbox__input" 
            type="checkbox" 
            {...register('checkbox', {required: true})}
          />
          <div className="checkbox__box">
            <CheckOutlined className='checkbox__icon' style={{color: "white"}} />
          </div>
          <div className="checkbox__text">Согласен на обработку персональных данных в соответствии с политикой конфиденциальности</div>
        </label>
        {errors.checkbox && <div className="error-message">Чтобы продолжить, необходимо ваше согласие</div>}
      </div>
      <div className="form__wrapper">
        <button className="form__button">Отправить</button>
      </div>
    </form>
  )
}

export default FormFollow