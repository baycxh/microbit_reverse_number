input.onButtonPressed(Button.A, function () {
    xa = Math.trunc(x / 100)
    basic.showNumber(xa)
})
input.onGesture(Gesture.LogoUp, function () {
    xc = Math.trunc(x - xa * 100 - xb * 10)
    basic.showNumber(xc)
})
input.onButtonPressed(Button.B, function () {
    xb = Math.trunc((x - xa * 100) / 10)
    basic.showNumber(xb)
})
input.onGesture(Gesture.LogoDown, function () {
    y = xc * 100 + xb * 10 + xa
    basic.showNumber(y)
})
let xb = 0
let xc = 0
let xa = 0
let y = 0
let x = 0
x = 145
y = 0
