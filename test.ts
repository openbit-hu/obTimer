// tests go here; this will not be compiled when this package is used as an extension.
let x=0

obTimer.onTimerEvent(function () {
  led.plot(x++, 0)
})

obTimer.start()