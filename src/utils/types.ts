export type TableType = "ITEM" | "LOCATION" | "ACTION"

export type Solution = "ASSET" | "INVENTORY" | "WO"

export type Action = "SCANNED" | "MOVED" | "RECEIVED"

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