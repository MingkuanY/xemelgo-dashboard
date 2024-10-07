import { useParams } from 'react-router-dom'
import styles from '../styles/details.module.scss'
import { ActionHistory, Item, LocationHistory } from '../utils/types'

export default function Details({ data, location_history, action_history }: { data: Item[], location_history: LocationHistory[], action_history: ActionHistory[] }) {
  const { id } = useParams<{ id: string }>();

  const item = data.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found :(</div>
  }

  return (
    <div>Details for Item {id}</div>
  )
}
