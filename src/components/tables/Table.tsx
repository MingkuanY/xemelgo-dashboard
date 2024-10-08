import React from 'react';
import styles from '../../styles/table.module.scss'

type TableProps<T> = {
  name: string;
  subtitle?: string;
  columns: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  onRowClick: (item: T) => void;
  isRowHighlighted: (item: T) => boolean;
}

export default function Table<T extends {}>({ name, subtitle, columns, data, renderRow, onRowClick, isRowHighlighted }: TableProps<T>) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <p className={styles.tableName}>{name}</p>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}
              onClick={() => onRowClick(item)}
              className={isRowHighlighted(item) && styles.highlight}
            >
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
