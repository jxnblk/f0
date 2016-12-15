
export const createArray = (length) => Array.from({ length })
  .map((a, i) => i)

export const isNum = (n) => typeof n === 'number' && !isNaN(n)

export const padPoints = (points) => points.map(p => ({
  ...p,
  x: p.pad.x
}))

