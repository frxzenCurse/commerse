import cl from '../styles/DesignerInfo.module.css'

const DesignerInfo = ({info}) => {
  return (
    <div>
      <div className={cl.profile}>
        <div className={cl.avatar}>
          <img src={'https://api.d4u.dev.dterra.eu/public' + info.avatar} alt="" />
        </div>
        <div className={cl.name}>
        {info.name && info.name} {info.surname && info.surname}
        </div>
      </div>
      <a href="#" className={cl.phone}>{info.phone}</a>
    </div>
  )
}

export default DesignerInfo