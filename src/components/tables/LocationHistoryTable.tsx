import { LocationHistory } from "../../utils/types";
import Table from "./Table";
import styles from "../../styles/itemstable.module.scss"
import { formatDate } from "../../utils/date";
import { useState } from "react";

export default function LocationHistoryTable({ data }: { data: LocationHistory[] }) {
  // Select all items with same location
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)
  const handleRowClick = (item: LocationHistory) => {
    // If location already selected, unselect it
    if (selectedLocation === item.location_name) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(item.location_name);
    }
  }
  const isRowHighlighted = (item: LocationHistory) => {
    return item.location_name === selectedLocation;
  }

  return (
    <Table<LocationHistory>
      name={"Location History"}
      subtitle={`Last ${Math.min(data.length, 6)} locations`}
      columns={['Location', 'Timestamp']}
      data={data}
      onRowClick={handleRowClick}
      isRowHighlighted={isRowHighlighted}
      renderRow={(item) => (
        <>
          <td className={styles.underline}>Storage {item.location_name}</td>
          <td>{formatDate(item.time)}</td>
        </>
      )} />
  )
}
