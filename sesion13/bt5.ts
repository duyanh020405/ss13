interface changeSpeed{
    speedUp(item:number):number
    slowDown(item:number):number
    stop():number
}
class Vehicle2 implements changeSpeed{
    private speed:number 
    constructor(speed:number){
        this.speed=speed
    }
    slowDown(item:number): number {
        return this.speed-=item
    }
    speedUp(item: number): number {
        return this.speed+=item
    }
    stop(): number {
        return this.speed=0
    }
}
const chay = new Vehicle2(6)
console.log(chay.speedUp(6));


