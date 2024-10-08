import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Item } from './utils/types';
import Details from './pages/Details';
import Header from './components/Header';
import styles from "./styles/app.module.scss"
import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  // Fetch items from the Express.js backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard data={items} />} />
            <Route path=":solutionType/:name" element={<Details data={items} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}