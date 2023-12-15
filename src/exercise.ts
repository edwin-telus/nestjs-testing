import mockUsers from './mocks/users.json'
import { USER_STATUSES, SORT } from './utils/constants'
import { type User, type UserList, type SortType } from './types'
/**
 * Notes:
 * - I will name the Object presented in the exercise as User as have active/inactive status
 * - I will add an id(as optional) to the user's interface, but it's not in the exercise
 * - Instead of using a new property named just date will use lastUpdateDate
 * - I will use camelCase for the properties instead of the ones presented in the exercise
 *   such as: Favorite Food, which is not a good practice for naming conventions
 */

// Mock data for the exercise
export const userList = mockUsers as UserList

// Adding lastUpdateDate to the user list and printing active users
export const usersWithExecutionDate = userList.map((user) => {
  const executionDate = new Date().toISOString()
  return { ...user, lastUpdateDate: executionDate }
})

// Retrieving only active users
export const activeUsers = usersWithExecutionDate.filter((user) => user.status === USER_STATUSES.ACTIVE) as UserList

// Sorting asc or desc users data by any property of User
export const sortUsersByPropertyName = (users: UserList, sortBy: keyof User, sort: SortType): UserList => {
  const asc = sort === SORT.ASC
  const sortedUsers = users.sort((userA, userB) => {
    const propertyA = userA[sortBy]
    const propertyB = userB[sortBy]

    if ((propertyA != null) && propertyB != null) {
      if (propertyA < propertyB) return asc ? -1 : 1
      if (propertyA > propertyB) return asc ? 1 : -1
    }

    return 0
  })

  return sortedUsers
}
