export const getUserDataFromState = (state) => {
  return state.usersPage.usersData
}

export const getUsersToSetThemOnPage = (state) => {
  return state.usersPage.usersOnPage
}

export const getCountOfUsers = (state) => {
  return state.usersPage.countOfUsers
}

export const getPageNumber = (state) => {
  return state.usersPage.currentPageNumber
}

export const getFetchingStatus = (state) => {
  return state.usersPage.isFetching
}

export const getButtonStatusToToggle = (state) => {
  return state.usersPage.toggleButtonStatus
}

export const getButtonDisabledInfo = (state) => {
  return state.usersPage.buttonsDisabledArray
}


