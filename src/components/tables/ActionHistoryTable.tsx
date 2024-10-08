import { ActionHistory } from "../../utils/types";
import Table from "./Table";
import styles from "../../styles/itemstable.module.scss"
import { formatDate } from '../../utils/date';
import { useState } from "react";

export default function ActionHistoryTable({ data }: { data: ActionHistory[] }) {
  // Select all items with same user
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const handleRowClick = (item: ActionHistory) => {
    // If user already selected, unselect it
    if (selectedUser === item.user) {
      setSelectedUser(null);
    } else {
      setSelectedUser(item.user);
    }
  }
  const isRowHighlighted = (item: ActionHistory) => {
    return item.user === selectedUser;
  }

  return (
    <div className={styles.marginTop}>
      <Table<ActionHistory>
        name={"Action History"}
        subtitle={`Last ${Math.min(data.length, 6)} locations`}
        columns={['User', 'Action', 'Timestamp']}
        data={data}
        onRowClick={handleRowClick}
        isRowHighlighted={isRowHighlighted}
        renderRow={(item) => (
          <>
            <td className={styles.underline}>{item.user}</td>
            <td>{item.action}</td>
            <td>{formatDate(item.time)}</td>
          </>
        )} />
    </div>
  )
}
