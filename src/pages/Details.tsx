import { useParams } from 'react-router-dom'
import styles from '../styles/details.module.scss'
import { ActionHistory, Item, LocationHistory } from '../utils/types'
import LocationHistoryTable from '../components/tables/LocationHistoryTable';
import ActionHistoryTable from '../components/tables/ActionHistoryTable';
import Icon from '../components/Icon';
import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

export default function Details({ data }: { data: Item[] }) {
  const { name } = useParams<{ name: string }>();
  const [actionHistory, setActionHistory] = useState<ActionHistory[]>([]);
  const [locationHistory, setLocationHistory] = useState<LocationHistory[]>([]);

  const item = data.find((item) => item.name === Number(name))

  if (!item) {
    return <div>Item not found :(</div>
  }

  // Fetch location and action history by item name

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/items/${name}/history`);
        const data = await response.json();
        setActionHistory(data.actionHistory);
        setLocationHistory(data.locationHistory);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, [name]);

  /**
   * Renders the corresponding texts based on the current item's solution type.
   *
   * @returns an object containing submit button and action button text
   */
  const renderActionTexts = () => {
    switch (item.solution_type) {
      case "Asset":
        return { submitText: "Missing", actionText: "Move to" };
      case "Inventory":
        return { submitText: "Consume", actionText: "Scan at" };
      case "WO":
        return { submitText: "Complete", actionText: "Receive at" };
    }
  }

  const { submitText, actionText } = renderActionTexts();

  // Location selection dropdown logic

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const actionRef = useRef<HTMLDivElement>(null);

  const handleStorageSelect = (storageNumber: number) => {
    setIsDropdownOpen(false);
    setSelectedLocation(storageNumber);
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (actionRef.current && !actionRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  // Possible storage locations
  const storageLocations = [1, 2, 3, 4]

  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <div className={styles.main}>
      <div className={styles.summaryContainer}>
        <div className={styles.topSection}>
          <p className={styles.itemHeading}>Item Name:</p>
          <p className={styles.itemNumber}>Item {name}</p>
          <button className={styles.submitBtn}>{submitText}</button>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.infoContainer}>
            <p className={styles.heading}>Solution</p>
            <p className={styles.name}>{item.solution_type}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.heading}>Current Location</p>
            <p className={styles.name}>Storage {item.last_location}</p>
          </div>
        </div>
        <div className={styles.actionContainer} ref={actionRef} >
          <button className={styles.actionBtn} onClick={() => setIsDropdownOpen(prev => !prev)}>
            <p className={styles.btnText}>{`${actionText} ${selectedLocation ? selectedLocation : ''}`}</p>
            <div className={styles.dropdown}>
              <Icon type="dropdown" fill="#4A90FF" />
            </div>
          </button>


          <div className={classnames(styles.dropdownMenu, isDropdownOpen ? styles.open : '')}>
            <ul>
              {storageLocations.map(storage => (
                <li key={storage} className={selectedLocation === storage ? styles.selected : ''} onClick={() => handleStorageSelect(storage)}>Storage {storage}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <LocationHistoryTable data={locationHistory} />
        <ActionHistoryTable data={actionHistory} />
      </div>
    </div>
  )
}
