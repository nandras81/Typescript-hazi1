import { Book } from "./classes/Book";
import { Library } from "./classes/Library";

let book = new Book('1','Holdkikötő','Kiss Tamás',200);

let library = new Library();

library.addBook(book);

let book2 = library.findBookById('1');
 console.log(book2);
if(book2!=null)
    console.log(book2.title);