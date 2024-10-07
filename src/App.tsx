import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ActionHistory, Item, LocationHistory } from './utils/types';
import Details from './pages/Details';

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

const mockLocationHistory: LocationHistory[] = [
  {
    storage: 2,
    time: new Date('2024-07-19T16:45:00')
  },
  {
    storage: 3,
    time: new Date('2024-07-19T15:23:00')
  },
  {
    storage: 1,
    time: new Date('2024-07-19T14:57:00')
  },
  {
    storage: 4,
    time: new Date('2024-07-19T13:05:00')
  },
]

const mockActionHistory: ActionHistory[] = [
  {
    user: "Tabitha Ryne",
    action: "SCANNED",
    time: new Date('2024-07-19T16:45:00')
  },
  {
    user: "Jacob Eld",
    action: "SCANNED",
    time: new Date('2024-07-19T15:23:00')
  },
  {
    user: "Jacob Eld",
    action: "SCANNED",
    time: new Date('2024-07-19T14:57:00')
  },
  {
    user: "Claire Stroup",
    action: "SCANNED",
    time: new Date('2024-07-19T13:05:00')
  },
]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard data={mockItems} />} />
          <Route path=":id" element={<Details data={mockItems} location_history={mockLocationHistory} action_history={mockActionHistory} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}