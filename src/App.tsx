import Header from './components/Header';
import ItemsTable from './components/tables/ItemsTable';
import Table from './components/tables/Table';
import styles from './styles/dashboard.module.scss';
import { Item } from './utils/types';

const mockItems: Item[] = [
  {
    id: 1,
    solution: "ASSET",
    location: 1
  },
  {
    id: 2,
    solution: "INVENTORY",
    location: 2
  },
  {
    id: 3,
    solution: "INVENTORY",
    location: 2
  },
  {
    id: 4,
    solution: "ASSET",
    location: 3
  },
  {
    id: 5,
    solution: "WO",
    location: 1
  },
]

export default function App() {
  return (
    <div className={styles.main}>
      <Header />
      <ItemsTable data={mockItems} />
    </div>
  )
}