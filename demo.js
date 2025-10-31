const range = (start, end) => {
  const result = [...Array(end - start + 1)].map((_, i) => start + i)

  console.log(`result = ${result}`)
  return result
}
const getPage = (page, total) => {
  if (total <= 5) return range(1, total)
  const start = Math.max(1, page - 2)
  const end = Math.min(total, page + 2)
  return range(start, end)
}
const nav = getPage(2, 20)

console.log(nav)
