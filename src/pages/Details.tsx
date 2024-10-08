import { useParams } from 'react-router-dom'
import styles from '../styles/details.module.scss'
import { ActionHistory, Item, LocationHistory } from '../utils/types'
import LocationHistoryTable from '../components/tables/LocationHistoryTable';
import ActionHistoryTable from '../components/tables/ActionHistoryTable';
import Icon from '../components/Icon';

export default function Details({ data, location_history, action_history }: { data: Item[], location_history: LocationHistory[], action_history: ActionHistory[] }) {
  const { id } = useParams<{ id: string }>();

  const item = data.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found :(</div>
  }

  /**
   * Renders the corresponding action based on the current item's solution type.
   *
   * @returns action user can take
   */
  const renderAction = () => {
    switch (item.solution) {
      case "Asset":
        return "Move to";
      case "Inventory":
        return "Scan at";
      case "WO":
        return "Receive at";
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.itemInfoContainer}>
        <div className={styles.topSection}>
          <p className={styles.itemHeading}>Item Name:</p>
          <p className={styles.itemNumber}>Item {id}</p>
          <button className={styles.consumeBtn}>Consume</button>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.infoContainer}>
            <p className={styles.heading}>Solution</p>
            <p className={styles.name}>{item.solution}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.heading}>Current Location</p>
            <p className={styles.name}>Storage {item.location}</p>
          </div>
        </div>
        <button className={styles.actionBtn}>
          <p className={styles.btnText}>{renderAction()}</p>
          <div className={styles.dropdown}>
            <Icon type="dropdown" fill="#4A90FF" />
          </div>
        </button>
      </div>

      <div className={styles.right}>
        <LocationHistoryTable data={location_history} />
        <ActionHistoryTable data={action_history} />
      </div>
    </div>
  )
}
