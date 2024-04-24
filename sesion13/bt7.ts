class Student242 {
    private id: number;
    private name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    getID(): number {
        return this.id;
    }
    
    getName(): string {
        return this.name;
    }
}

class Classroom {
    private students: Student242[];
    
    constructor() {
        this.students = [];
    }
    
    addStudent(student: Student242): void {
        this.students.push(student);
    }
    removeStudent(studentToRemove:Student242) {
        const index = this.students.indexOf(studentToRemove);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    inRa(): void {
        this.students.forEach(student => {
            console.log(`ID: ${student.getID()}, Name: ${student.getName()}`);
        });
    }
    changeInf(newId: number, newName: string, find: Student242): void {
        this.students.forEach(student => {
            if (find === student) {
                student.id = newId;
                student.name = newName;
            }
        });
    }
    }

const allStudents: Student242[] = [
    new Student242(1, "Alice"),
    new Student242(2, "Bob"),
    new Student242(3, "Charlie"),
    new Student242(4, "David"),
    new Student242(5, "Eve"),
    new Student242(6, "Frank")
];

const classroom1: Classroom = new Classroom();
const classroom2: Classroom = new Classroom();

for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStudents[i]);
}

for (let i = 0; i < 3; i++) {
    classroom2.addStudent(allStudents[i]);
}
console.log(classroom1.inRa());
console.log(classroom2.inRa());

