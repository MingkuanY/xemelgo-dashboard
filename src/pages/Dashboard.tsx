import Header from '../components/Header';
import ItemsTable from '../components/tables/ItemsTable';
import { Item } from '../utils/types';
import styles from '../styles/dashboard.module.scss';

export default function Dashboard({ data }: { data: Item[] }) {
  return (
    <div className={styles.main}>
      <Header />
      <ItemsTable data={data} />
    </div>
  )
}