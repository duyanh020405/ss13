"use strict";
class Job {
    constructor(type) {
    }
}
class PastJob extends Job {
    constructor(workingHours, type) {
        super(type);
        this.workingHours = workingHours;
    }
    printType() {
        console.log("type:", this.type);
    }
    calculateSalary() {
        console.log("luong :", 30000 * this.workingHours, "VDN");
    }
}
class Fulltime extends Job {
    constructor(workingHours, type) {
        super(type);
    }
    printType() {
        console.log("type:", this.type);
    }
    calculateSalary() {
        console.log("luong :", 10000000, "VDN");
    }
}
const duy = new PastJob(24, "hihi");
duy.calculateSalary();
