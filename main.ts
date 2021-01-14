namespace obTimer {
    let dt:number=1000000
    let res:number=200000
    let t0:number
    let timerCallback:()=>void
    //% blockId="obTimer_init"
    //% block="start Timer event || in $time || with $resolution"
    export function init(time?:number,resolution?:number){
        if(time)dt=time*1000
        if(resolution)res=resolution*1000
        t0=control.micros()
        control.inBackground(function () {
            while(true){
                control.waitMicros(res)
                let t1=control.micros()
                if(t1-t0>dt){
                    timerCallback()
                    t0=t1
                }
            }
        })
    }
    /**
     * Attaches code to run when .
     * @param body TODO
     */
    //% blockId="obTimer_onTimerEvent"
    //% block="onTimerEvent"
    export function onTimerEvent(body: () => void): void {
        timerCallback=body
    }
}