import { LocationHistory } from "../../utils/types";
import Table from "./Table";
import styles from "../../styles/itemstable.module.scss"
import { formatDate } from "../../utils/date";

export default function LocationHistoryTable({ data }: { data: LocationHistory[] }) {
  return (
    <Table<LocationHistory>
      name={"Location History"}
      subtitle={`Last ${Math.min(data.length, 6)} locations`}
      columns={['Location', 'Timestamp']}
      data={data}
      renderRow={(item) => (
        <>
          <td className={styles.underline}>Storage {item.storage}</td>
          <td>{formatDate(item.time)}</td>
        </>
      )} />
  )
}
