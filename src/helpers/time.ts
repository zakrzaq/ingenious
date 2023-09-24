export const sortByTimeStrings = (a: string, b: string, ascending = false) => {
  const timeA = a.split(":").map(Number)
  const timeB = b.split(":").map(Number)

  if (ascending) {
    if (timeB[0] !== timeA[0]) {
      return timeA[0] - timeB[0];
    }
    return timeA[1] - timeB[1]; 
  } else {
    if (timeA[0] !== timeB[0]) {
      return timeB[0] - timeA[0];
    }
    return timeB[1] - timeA[1]; 
  }
}
