
import {Book} from "./Book";

import {ILibrary} from "../interfaces/ILibrary"

export class Library implements ILibrary {
  
    books: Book[];

    constructor(){
        this.books = new Array as Array<Book>;
    }

    addBook(book: Book):void{
        this.books.push(book);
    }
    removeBook(id:string):void{
        let index = this.books.findIndex(book => book.id = id);
        this.books.slice(index,1);
    }

    findBookById(id:string):Book|undefined{
        return this.books.find(book => book.id==id);
    }

    listAllBooks():Book[]{
        return this.books;
    }
}