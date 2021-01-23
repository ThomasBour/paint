const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let paintBrushSize = 10
let paintBrushColor = 'black'
ctx.fillStyle = paintBrushColor

let isMouseClickPressed = false
canvas.addEventListener('mousedown', () => {
  isMouseClickPressed = true
})

canvas.addEventListener('mouseup', () => {
  isMouseClickPressed = false
})
canvas.addEventListener('mousemove', e => {
  if(isMouseClickPressed){
    const x = e.offsetX
    const y = e.offsetY
    ctx.fillRect(x, y, paintBrushSize, paintBrushSize)
  }
})