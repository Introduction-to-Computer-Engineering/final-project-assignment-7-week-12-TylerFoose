basic.forever(function () {
    pins.digitalReadPin(DigitalPin.P8)
    if (pins.digitalReadPin(DigitalPin.P8) > 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
