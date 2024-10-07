import styles from '../styles/header.module.scss'
import Icon from './Icon'

export default function Header() {
  const mockUser = {
    username: "Tabitha Ryne",
    role: "Xemelgo Administrator"
  }

  return (
    <div className={styles.main}>
      <div className={styles.userBtn}>
        <div className={styles.left}>
          <p className={styles.username}>{mockUser.username}</p>
          <p className={styles.role}>{mockUser.role}</p></div>
        <div className={styles.right}>
          <Icon type="dropdown" fill="#4A90FF" />
        </div>
      </div>
    </div>
  )
}
