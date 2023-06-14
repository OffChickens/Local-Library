function findAuthorById(authors, id) {
  for (let author in authors) {
    let currentAuthor = authors[author]
    if (currentAuthor.id === id) return currentAuthor;
  }
}

function findBookById(books, id) {
  for (let book in books) {
    let currentBook = books[book]
    if (currentBook.id === id) return currentBook;
  }
}

function partitionBooksByBorrowedStatus(books) {
  let taken = [];
  let notTaken = [];
  for (let book in books) {
    let currentBook = books[book];
    let {borrows} = currentBook
    let checkStatus = borrows[0].returned;
    checkStatus == true ? notTaken.push(currentBook) : taken.push(currentBook);
  }
  return [taken, notTaken];
}

function getBorrowersForBook(book, accounts) {
  let borrowerIds = book.borrows
  let borrowers = [];
  for (let id in borrowerIds) {
    let currentId = borrowerIds[id];
    for (let account in accounts) {
      let currentAccount = accounts[account];
      if (currentAccount.id == currentId.id && borrowers.length < 10){ 
        currentAccount.returned = currentId.returned
        borrowers.push(currentAccount);
      }
    }
  }
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
