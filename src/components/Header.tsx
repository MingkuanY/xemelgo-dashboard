import { useEffect, useRef, useState } from 'react'
import styles from '../styles/header.module.scss'
import { User } from '../utils/types'
import Icon from './Icon'
import classNames from 'classnames';

export default function Header({ users }: { users: User[] }) {
  const [currUser, setCurrUser] = useState(users[0]);

  // User selection dropdown logic

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  const handleUserSelect = (userNumber: number) => {
    setCurrUser(users[userNumber]);
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  return (
    <div className={styles.main}>
      <div className={styles.userBtn} ref={userRef} onClick={() => setIsDropdownOpen(prev => !prev)}>
        <div className={styles.left}>
          <p className={styles.username}>{currUser.user_name}</p>
          <p className={styles.role}>{currUser.role}</p></div>
        <div className={styles.right}>
          <Icon type="dropdown" fill="#4A90FF" />
        </div>

        <div className={classNames(styles.dropdownMenu, isDropdownOpen ? styles.open : '')}>
          <ul>
            {users.map((user, index) => (
              <li key={index} className={currUser.user_name === user.user_name ? styles.selected : ''} onClick={() => handleUserSelect(index)}>{user.user_name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
