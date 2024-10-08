import { useNavigate } from 'react-router-dom';
import { Item } from "../../utils/types";
import Table from "./Table";
import styles from "../../styles/itemstable.module.scss"

export default function ItemsTable({ data }: { data: Item[] }) {
  const navigate = useNavigate();
  const handleDetailsClick = (id: number) => {
    navigate(`/details/${id}`);
  }

  return (
    <Table<Item>
      name={"Item Table"}
      columns={['Item', 'Solution', 'Location', '']}
      data={data}
      renderRow={(item) => (
        <>
          <td>Item {item.id}</td>
          <td className={styles.underline}>{item.solution}</td>
          <td>Storage {item.location}</td>
          <td>
            <button className={styles.seeDetails} onClick={() => handleDetailsClick(item.id)}>See Details</button>
          </td>
        </>
      )} />
  )
}
