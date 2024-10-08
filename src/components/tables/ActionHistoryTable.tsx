import { ActionHistory } from "../../utils/types";
import Table from "./Table";
import styles from "../../styles/itemstable.module.scss"
import { formatDate } from '../../utils/date';

export default function ActionHistoryTable({ data }: { data: ActionHistory[] }) {
  return (
    <div className={styles.marginTop}>
      <Table<ActionHistory>
        name={"Action History"}
        subtitle={`Last ${Math.min(data.length, 6)} locations`}
        columns={['User', 'Action', 'Timestamp']}
        data={data}
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
