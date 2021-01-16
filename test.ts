// tests go here; this will not be compiled when this package is used as an extension.
let x=0

obTimer.onTimerEvent(function () {
  led.plotBrightness(2, 2, x=~x&0xff)
})

obTimer.start()