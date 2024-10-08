import { useNavigate } from 'react-router-dom';
import { Item, Solution } from "../../utils/types";
import Table from "./Table";
import styles from "../../styles/itemstable.module.scss"
import { useState } from 'react';

export default function ItemsTable({ data }: { data: Item[] }) {
  const navigate = useNavigate();
  const handleDetailsClick = (item: Item) => {
    navigate(`/${item.solution_type.toLowerCase()}/${item.name}`);
  }

  // Select all items with same solution type
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null)
  const handleRowClick = (item: Item) => {
    // If solution already selected, unselect it
    if (selectedSolution === item.solution_type) {
      setSelectedSolution(null);
    } else {
      setSelectedSolution(item.solution_type);
    }
  }
  const isRowHighlighted = (item: Item) => {
    return item.solution_type === selectedSolution;
  }

  return (
    <Table<Item>
      name={"Item Table"}
      columns={['Item', 'Solution', 'Location', '']}
      data={data}
      onRowClick={handleRowClick}
      isRowHighlighted={isRowHighlighted}
      renderRow={(item) => (
        <>
          <td>Item {item.name}</td>
          <td className={styles.underline}>{item.solution_type}</td>
          <td>Storage {item.last_location}</td>
          <td>
            <button className={styles.seeDetails} onClick={() => handleDetailsClick(item)}>See Details</button>
          </td>
        </>
      )} />
  )
}
