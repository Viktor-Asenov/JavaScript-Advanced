class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error("Not enough space in the collection.");
    }

    const newBook = {
      bookName,
      bookAuthor,
      payed: false,
    };

    this.books.push(newBook);

    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const book = this.books.find((b) => b.bookName == bookName);
    if (book == undefined) {
      throw new Error(`${bookName} is not in the collection.`);
    } else if (book.payed == true) {
      throw new Error(`${bookName} has already been paid.`);
    }

    book.payed = true;

    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const book = this.books.find((b) => b.bookName == bookName);
    if (book == undefined) {
      throw new Error("The book, you're looking for, is not found.");
    } else if (book.payed == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    const bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);

    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    let statistics = [];
    if (bookAuthor == "" || bookAuthor == undefined) {
      let emptySlots = this.capacity - this.books.length;
      statistics.push(
        `The book collection has ${emptySlots} empty spots left.`
      );

      const sortedAlphBooks = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      for (let book of sortedAlphBooks) {
        statistics.push(
          `${book.bookName} == ${book.bookAuthor} - ${
            book.payed == false ? "Not Paid" : "Has Paid"
          }.`
        );
      }
    } else {
      const authorBook = this.books.find((b) => b.bookAuthor == bookAuthor);
      if (authorBook == undefined) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      statistics.push(
        `${authorBook.bookName} == ${authorBook.bookAuthor} - ${
          authorBook.payed == false ? "Not Paid" : "Has Paid"
        }.`
      );
    }

    return statistics.join("\n");
  }
}

const library = new LibraryCollection(2);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.getStatistics("Miguel de Cervantes"));
