import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ActionHistory, Item, LocationHistory } from './utils/types';
import Details from './pages/Details';
import Header from './components/Header';
import styles from "./styles/app.module.scss"

const mockItems: Item[] = [
  {
    name: 1,
    solution: "Asset",
    location: 1
  },
  {
    name: 2,
    solution: "Inventory",
    location: 2
  },
  {
    name: 3,
    solution: "Inventory",
    location: 2
  },
  {
    name: 4,
    solution: "Asset",
    location: 3
  },
  {
    name: 5,
    solution: "WO",
    location: 1
  },
]

const mockLocationHistory: LocationHistory[] = [
  {
    location: 2,
    time: new Date('2024-07-19T16:45:00')
  },
  {
    location: 3,
    time: new Date('2024-07-19T15:23:00')
  },
  {
    location: 1,
    time: new Date('2024-07-19T14:57:00')
  },
  {
    location: 4,
    time: new Date('2024-07-19T13:05:00')
  },
]

const mockActionHistory: ActionHistory[] = [
  {
    user: "Tabitha Ryne",
    action: "Scanned",
    time: new Date('2024-07-19T16:45:00')
  },
  {
    user: "Jacob Eld",
    action: "Scanned",
    time: new Date('2024-07-19T15:23:00')
  },
  {
    user: "Jacob Eld",
    action: "Scanned",
    time: new Date('2024-07-19T14:57:00')
  },
  {
    user: "Claire Stroup",
    action: "Scanned",
    time: new Date('2024-07-19T13:05:00')
  },
]

export default function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard data={mockItems} />} />
            <Route path=":solutionType/:name" element={<Details data={mockItems} location_history={mockLocationHistory} action_history={mockActionHistory} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}