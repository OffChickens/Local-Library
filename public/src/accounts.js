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
/*
const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      }
    ],
  }]
  const account =
    {
      id: "5f446f2e2cfa3e1d234679b9",
      picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
      age: 25,
      name: {
        first: "Esther",
        last: "Tucker",
      },
      company: "ZILLACON",
      email: "esther.tucker@zillacon.me",
      registered: "Thursday, May 28, 2015 2:51 PM",
    }

    const authors = [
      {
        id: 0,
        name: {
          first: "Lucia",
          last: "Moreno",
        },
      },
      {
        id: 1,
        name: {
          first: "Trisha",
          last: "Mathis",
        },
      },
      {
        id: 2,
        name: {
          first: "Arnold",
          last: "Marks",
        },
      },
      {
        id: 3,
        name: {
          first: "Faye",
          last: "Arnold",
        },
      },
      {
        id: 4,
        name: {
          first: "Tami",
          last: "Hurst",
        },
      },
      {
        id: 5,
        name: {
          first: "Farmer",
          last: "Stevenson",
        },
      },
      {
        id: 6,
        name: {
          first: "Hancock",
          last: "Fuller",
        },
      },
      {
        id: 7,
        name: {
          first: "Ila",
          last: "Reid",
        },
      },
      {
        id: 8,
        name: {
          first: "Susanne",
          last: "Lawson",
        },
      },
    ]

    console.log(getBooksPossessedByAccount(account, books, authors))*/