let LED_y = 0
let LED_x = 0
let Schwierigkeit = 4
basic.forever(function () {
    led.unplot(LED_x, LED_y)
    LED_x = pins.map(
    input.acceleration(Dimension.X) * Schwierigkeit,
    -1023,
    1023,
    0,
    5
    )
    LED_y = pins.map(
    input.acceleration(Dimension.Y) * Schwierigkeit,
    -1023,
    1023,
    0,
    5
    )
    led.plot(LED_x, LED_y)
    basic.setLedColor(0x00ff00)
    if (LED_x < 0 || LED_x > 4 || (LED_y < 0 || LED_y > 4)) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(3000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
