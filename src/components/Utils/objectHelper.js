export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
  return items.map(u => {
    debugger
    if (u[objPropName] === itemId) {
      return {...u, ...newObjectProps}
    }
    return u
  })
}