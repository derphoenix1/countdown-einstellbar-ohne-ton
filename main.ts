input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    startwert += 1
    basic.showNumber(startwert)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    while (startwert != 0) {
        basic.pause(1000)
        startwert += -1
        basic.showNumber(startwert)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    startwert += -1
    basic.showNumber(startwert)
})
let startwert = 0
startwert = 1
basic.showNumber(startwert)
