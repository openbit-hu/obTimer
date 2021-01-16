//% color=#008060 weight=100 icon="\uf017" block="obTimer"
namespace obTimer {
    let dt:number=1000
    let res:number=200
    let t0:number
    let timerCallback:()=>void
    //% blockId="obTimer_start"
    //% block="start Timer event || in every $time ms with $resolution ms accuracy"
    export function start(time?:number,resolution?:number){
        if(time)dt=time
        if(resolution)res=resolution
        if(resolution>dt/2)resolution=dt/2
        t0=control.millis()
        control.inBackground(function () {
            while(true){
                basic.pause(res)
                let t1=control.millis()
                if(t1-t0>dt){
                    timerCallback()
                    t0=t1
                }
            }
        })
    }
    /**
     * Attaches code to run when the timer triggers an event.
     * @param body TODO
     */
    //% blockId="obTimer_onTimerEvent"
    //% block="onTimerEvent"
    export function onTimerEvent(body: () => void): void {
        timerCallback=body
    }
}