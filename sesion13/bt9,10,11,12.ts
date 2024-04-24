class Bookk{
    id:number
    title:string
    author:string
    stock:number
    status:string
    constructor(id:number,title:string,author:string,stock:number,status:string){
        this.id=id
        this.title=title
        this.author=author
        this.stock=stock
        this.status=status
    }
}
class Member{
    id:number
    name:string
    contact:string
    status:boolean
    books:string[]
    constructor(id:number,name:string,contact:string,status:boolean=true,books:string[]){
        this.id=id
        this.name=name
        this.contact=contact
        this.status=status
       this.books=[]
    }
    borrowBook(idFind: number): void {
        let bookFound = false;
        this.books.forEach(book => {
            if (book.id === idFind) {
                if (book.stock > 0 && book.status !== "Unavailable") {
                    book.stock--;
                    bookFound = true;
                } else {
                    console.log("khong the muon sach");
                    bookFound = true;
                }
            }
        });
    
        if (!bookFound) {
            console.log("khong tim thay");
        }
    }
    returnBook(library: Libraryy, id: number): void {
        const index = this.books.findIndex(book => book.id === id); 
        if (index !== -1) {
            const returnedBook = this.books[index];
            library.returnBook(returnedBook); 
            this.books.splice(index, 1); 
        } else {
            console.log("co muon dau ma tra ??");
        }
    }
}
    
}
class LendedBook{
    memberId:number
    bookId:number 
    dueDate:string
    constructor(memberId:number,bookId:number,dueDate:string){
        this.memberId=memberId
        this.bookId=bookId
        this.dueDate=dueDate
    }
}
class Libraryy{
    books:any[]
    members:any[]
    constructor(books:any[],members:any[]){
        this.books=books
        this.members=members
    }
    addBook(book:Bookk){
        this.books.push(book)

    }
    showBooks(){
        this.books.forEach(book => {
            console.log(book);
        });
    }
    registerMember(item:Member){
        this.members.push(item)
    }
    blockMember(blockItem:Member){
        this.members.forEach(item => {
            if(item===blockItem){
                item.status=false
            }   
        });
    }
}
// const book1 = new Bookk(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "Available");
// const book2 = new Bookk(2, "To Kill a Mockingbird", "Harper Lee", 3, "Available");
// const book3 = new Bookk(3, "1984", "George Orwell", 7, "Available");
// const member1 = new Member(1, "Alice", "alice@example.com", "Active",["1","2"]);
// const member2 = new Member(2, "Bob", "bob@example.com", "Active",["1","2"]);
// const library = new Libraryy([book1, book2, book3], [member1, member2]);
// console.log("Books in the library:");
// library.showBooks();
// const newBook = new Bookk(4, "The Catcher in the Rye", "J.D. Salinger", 2, "Available");
// library.addBook(newBook);
// console.log("\nBooks in the library after adding a new book:");
// library.showBooks();



// // Khởi tạo vài thành viên
// const member1 = new Member(1, "Alice", "alice@example.com", "Active", []);
// const member2 = new Member(2, "Bob", "bob@example.com", "Active", []);

// // Khởi tạo một sách
// const book1 = new Bookk(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "Available");

// // Thêm thành viên và sách vào thư viện
// const library = new Libraryy([book1], [member1, member2]);

// // In ra trạng thái của thành viên Bob trước khi chặn
// console.log("Member Bob's status before blocking:", member2.status);

// // Chặn thành viên Bob
// library.blockMember(member2);

// // In ra trạng thái của thành viên Bob sau khi chặn
// console.log("Member Bob's status after blocking:", member2.status);