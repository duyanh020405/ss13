"use strict";
// Cả hai abstract class và interface là cách để định nghĩa các hợp đồng (contracts)
//  cho các lớp khác trong lập trình hướng đối tượng, nhưng chúng có một số điểm khác nhau:
// Abstract Class:
// Định nghĩa: Abstract class là một lớp có thể chứa các phương thức trừu tượng và 
// cũng có thể chứa các phương thức có thân (body). Các phương thức trừu tượng trong 
// abstract class phải được triển khai (override) trong các lớp con.
// Sử dụng: Khi bạn muốn chia sẻ mã và cung cấp một bộ các phương thức và thuộc tính 
// mặc định cho các lớp con, và đồng thời cung cấp một bản thiết kế cơ bản cho các lớp con.
// Ví dụ:
// typescript
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();
Interface: 
// Định nghĩa: Interface chỉ chứa các khai báo phương thức 
// mà các lớp phải triển khai. Nó không thể chứa bất kỳ thân phương thức (body) nào.
// Sử dụng: Khi bạn muốn định nghĩa một hợp đồng (contract) mà các lớp phải 
// tuân thủ mà không cung cấp bất kỳ triển khai cụ thể nào.
// Ví dụ:
// typescript
;
class Document {
    print() {
        console.log("Printing document...");
    }
}
const doc = new Document();
doc.print();
// Tóm lại:
// Sử dụng abstract class khi bạn cần chia sẻ mã và cung cấp một bộ các phương
//  thức và thuộc tính mặc định cho các lớp con.
// Sử dụng interface khi bạn cần định nghĩa một hợp đồng (contract) mà các 
// lớp phải tuân thủ mà không cung cấp bất kỳ triển khai cụ thể nào.
