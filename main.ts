let count = 0
radio.onReceivedString(function (receivedString) {
    count += 1
    if (count < 1) {
        radio.sendString("" + (input.temperature()))
    } else if (count < 2) {
        radio.sendString("" + (input.compassHeading()))
    } else if (count < 3) {
        radio.sendString("" + (input.lightLevel()))
    } else {
        count = 0
    }
})
basic.forever(function () {
    radio.setGroup(255)
})
