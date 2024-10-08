export type TableType = "ITEM" | "LOCATION" | "ACTION"

export type Solution = "Asset" | "Inventory" | "WO"

export type Action = "Scanned" | "Moved" | "Received"

export type Item = {
  name: number,
  solution: Solution,
  location: number
}

export type LocationHistory = {
  location: number
  time: Date,
}

export type ActionHistory = {
  user: string,
  action: Action,
  time: Date
}