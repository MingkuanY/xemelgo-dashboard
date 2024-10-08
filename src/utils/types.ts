export type TableType = "ITEM" | "LOCATION" | "ACTION"

export type Solution = "Asset" | "Inventory" | "WO"

export type Action = "Scanned" | "Moved" | "Received"

export type Item = {
  id: number,
  solution: Solution,
  location: number
}

export type LocationHistory = {
  storage: number
  time: Date,
}

export type ActionHistory = {
  user: string,
  action: Action,
  time: Date
}