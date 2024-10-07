import Header from './components/Header';
import Table from './components/Table';
import styles from './styles/dashboard.module.scss';

export default function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Table />
    </div>
  )
}