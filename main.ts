input.onButtonPressed(Button.A, function () {
    basic.showNumber(envirobit.getLight())
    basic.showNumber(envirobit.getHumidity())
})
envirobit.onClap(function () {
    envirobit.setLEDs(envirobit.OnOff.On)
    basic.pause(2000)
    envirobit.setLEDs(envirobit.OnOff.Off)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(envirobit.getTemperature())
    basic.showNumber(envirobit.getHumidity())
})
basic.showNumber(envirobit.getHumidity())
