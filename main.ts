namespace obTimer {
    let dt:number=1000
    let res:number=200
    let t0:number
    let timerCallback:()=>void
    export function init(){
        t0=control.micros()
        control.inBackground(function () {
            control.waitMicros(res*1000)
            let t1=control.micros()
            if(t1-t0>dt*1000){
                timerCallback()
            }
        })
    }
    /**
     * Attaches code to run when .
     * @param body TODO
     */
    export function onTimerEvent(body: () => void): void {
        timerCallback=body
    }

}