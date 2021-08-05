export const calcTime = (time) => {
  const hours = Math.floor(time / 60)
  const mins = time % 60
  if (hours === 0) return `${mins} minutes`
  return `${hours} hours ${mins} minutes`
}
