import { type SORT, type USER_STATUSES } from './utils/constants'

export type UserStatus = typeof USER_STATUSES[keyof typeof USER_STATUSES]
export type SortType = typeof SORT[keyof typeof SORT]

// Defining the types
export interface User {
  // id?: number - I would add an id to the user in order to identify it
  name: string
  favoriteFood: string
  favoriteMovie: string
  status: UserStatus
  lastUpdateDate?: string
}

export type UserList = User[]
