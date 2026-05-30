import { Book } from "./classes/Book";
import { Library } from "./classes/Library";

let book = new Book('1','Holdkikötő','Kiss Tamás',200);

let library = new Library();

library.addBook(book);
book = new Book('2','Alföld','Kiss Tamás',100);
library.addBook(book);

console.table(library.listAllBooks());
let book2 = library.findBookById('1');
if(book2==null)
    console.log("Nem találom a könyvet"); 
if(book2!=null)
    console.log(book2.title);