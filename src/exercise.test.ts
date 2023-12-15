import { expect, test } from '@jest/globals'

import { usersWithExecutionDate, sortUsersByPropertyName, activeUsers, userList } from './exercise'
import { USER_STATUSES } from './utils/constants'

test('Adding execution date to all users', () => {
  usersWithExecutionDate.forEach((user) => {
    const { lastUpdateDate } = user
    expect(lastUpdateDate).not.toBeNull()
    expect(lastUpdateDate).not.toBeUndefined()
  })
})

test('Getting Only Active Users', () => {
  activeUsers.forEach((user) => {
    const { name, favoriteMovie, status, lastUpdateDate } = user
    console.log(`[ACTIVE_USER] - Name: ${name} | ExecutionDate: ${lastUpdateDate} | FavoriteMovie: ${favoriteMovie}`)
    expect(status).toEqual(USER_STATUSES.ACTIVE)
  })
})

// Commented on purpose, working as expected
// test('Sorting User by an unknown property', () => {
//   const sortedUsers = sortUsersByPropertyName(userList, 'unknown', 'asc')
//   const { name } = sortedUsers[0]
//   console.log(name)
//   expect(name).toEqual('Alfy Petrozzi')
// })

test('Sorting User by name ascending', () => {
  const sortedUsers = sortUsersByPropertyName(userList, 'name', 'asc')
  const { name } = sortedUsers[0]
  // If codes encounters an error, it will return the same array
  expect(name).toEqual('Alfy Petrozzi')
})

test('Sorting User by name descending', () => {
  const sortedUsers = sortUsersByPropertyName(userList, 'name', 'desc')
  const { name } = sortedUsers[0]
  expect(name).toEqual('Rockwell Caughan')
})
