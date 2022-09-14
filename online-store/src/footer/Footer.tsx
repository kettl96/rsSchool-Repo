import s from './Footer.module.css'

const Footer = () => {
  return (
    <div className={s.wrapper}>
        <a href="https://github.com/kettl96" className={s.github}>
          <img src="img/github.png" alt="github" />
          <div>My GitHub</div>
        </a>
        <div className={s.date}>2022</div>
        <a href="https://rs.school/js/">
          <img src="img/rs_school_js.svg" alt="rs_course" className={s.rs} />
        </a>
    </div>
  )
}
export default Footer