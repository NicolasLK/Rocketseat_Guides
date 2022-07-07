// clearTimeout cancelar um timeOut

const timeOut = 3000
const downTime = () => console.log("Done!")

let timer = setTimeout(downTime, timeOut)
clearTimeout(timer)
