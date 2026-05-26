import {Library} from "./Library";

export class User{

    userId: string;
    name: string;
    email: string;

    constructor(userId: string,name: string,email: string){
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    borrowBook(library: Library, bookId: string){
        library.findBookById(bookId);
    }
}