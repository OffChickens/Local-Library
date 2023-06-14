function findAccountById(accounts, id) {
  let matching = accounts.find((person) => person.id === id);
  return matching;
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((personA, personB) => 
    personA.name.last.toLowerCase() > personB.name.last.toLowerCase() ? 1 : -1);

  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let numBorrows = 0;
  const {id} = account;
  let bookBorrows = books.map((book) => book.borrows);

  for (let book in bookBorrows){
    let borrowers = bookBorrows[book];
    for (let ids in borrowers) {
      let personId = borrowers[ids];
        if (personId.id === id) numBorrows++;
    }
  }
  return numBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let bookList = [];
  const {id} = account;
  let bookBorrows = books.map((book) => book.borrows);

  for (let book in bookBorrows){
    let borrowers = bookBorrows[book];
    for (let ids in borrowers) {
      let personId = borrowers[ids];
        if (personId.id === id && personId.returned == false) {
          bookList.push(books[book]);
        }
    }
  }
  bookList.forEach((book) => {
    const { authorId } = book;
    for (let author in authors) {
      let currentAuthor = authors[author]
      let {id} = currentAuthor;
      if (authorId === id) book.author = currentAuthor;
    }
  })
  return bookList;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
