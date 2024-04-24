abstract class Job{
    type:string
    constructor(type:string){

    }
    abstract  printType():void
    abstract  calculateSalary():void

} 
class PastJob extends Job{
    workingHours:number
    constructor(workingHours:number,type:string){
        super(type)
        this.workingHours=workingHours
    }
    printType(): void {
        console.log("type:",this.type);
        
    }
    calculateSalary(): void {
        console.log("luong :",30000*this.workingHours,"VDN");
    }
}
class Fulltime extends Job{
    constructor(workingHours:number,type:string){
        super(type)
    }
    printType(): void {
        console.log("type:",this.type);
        
    }
    calculateSalary(): void {
        console.log("luong :",10000000,"VDN");
    }
}
const duy =new PastJob(24,"hihi")
duy.calculateSalary()