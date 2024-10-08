export type TableType = "ITEM" | "LOCATION" | "ACTION"

export type Solution = "Asset" | "Inventory" | "WO"

export type Action = "Scanned" | "Moved" | "Received"

export type Item = {
  name: number,
  solution_type: Solution,
  last_location: number
}

export type LocationHistory = {
  id: number,
  location_name: number,
  time: Date,
  item_name: number
}

export type ActionHistory = {
  id: number,
  user_name: string,
  action: Action,
  time: Date,
  item_name: number,
}

export type User = {
  user_name: string,
  role: string,
}