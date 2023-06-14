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


/*const book =
{
  id: "5f4471328ea4e12c67d5f691",
  title: "eiusmod pariatur Lorem ipsum consectetur",
  genre: "Science",
  authorId: 32,
  borrows: [
    {
      id: "5f446f2ec56b2fa77d5545ef",
      returned: false,
    },
    {
      id: "5f446f2e2f35653fa80bf490",
      returned: true,
    },
    {
      id: "5f446f2e637138095dcc3db2",
      returned: true,
    },
  ],
}

    const accounts = [
      {
        id: "5f446f2e2f35653fa80bf490",
        picture: "http://placehold.it/32x32",
        age: 36,
        name: {
          first: "Rodriquez",
          last: "Hawkins",
        },
        company: "COMDOM",
        email: "rodriquez.hawkins@comdom.io",
        registered: "Sunday, August 9, 2015 1:43 AM",
      },
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        picture: "http://placehold.it/32x32",
        age: 33,
        name: {
          first: "Dena",
          last: "Merritt",
        },
        company: "ORBEAN",
        email: "dena.merritt@orbean.me",
        registered: "Sunday, April 29, 2018 12:14 AM",
      },
      {
        id: "5f446f2ead0070f44676f2f6",
        picture: "http://placehold.it/32x32",
        age: 24,
        name: {
          first: "Toni",
          last: "Ball",
        },
        company: "MACRONAUT",
        email: "toni.ball@macronaut.biz",
        registered: "Wednesday, October 2, 2019 1:33 PM",
      },
      {
        id: "5f446f2e2cfa3e1d234679b9",
        picture: "http://placehold.it/32x32",
        age: 23,
        name: {
          first: "Kristen",
          last: "Woods",
        },
        company: "CODACT",
        email: "kristen.woods@codact.org",
        registered: "Thursday, May 15, 2014 12:48 AM",
      },
      {
        id: "5f446f2ed3609b719568a415",
        picture: "http://placehold.it/32x32",
        age: 31,
        name: {
          first: "Corinne",
          last: "Pearson",
        },
        company: "EARTHWAX",
        email: "corinne.pearson@earthwax.com",
        registered: "Tuesday, March 24, 2020 10:39 AM",
      },
      {
        id: "5f446f2e1c71888e2233621e",
        picture: "http://placehold.it/32x32",
        age: 22,
        name: {
          first: "Lorene",
          last: "Hammond",
        },
        company: "ZUVY",
        email: "lorene.hammond@zuvy.co.uk",
        registered: "Tuesday, September 29, 2015 11:42 AM",
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        picture: "http://placehold.it/32x32",
        age: 36,
        name: {
          first: "Gayle",
          last: "Banks",
        },
        company: "MARKETOID",
        email: "gayle.banks@marketoid.org",
        registered: "Thursday, August 22, 2019 6:30 AM",
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        picture: "http://placehold.it/32x32",
        age: 35,
        name: {
          first: "Dorothy",
          last: "Fernandez",
        },
        company: "MEDICROIX",
        email: "dorothy.fernandez@medicroix.biz",
        registered: "Thursday, July 12, 2018 12:40 PM",
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        picture: "http://placehold.it/32x32",
        age: 20,
        name: {
          first: "Padilla",
          last: "Gaines",
        },
        company: "DREAMIA",
        email: "padilla.gaines@dreamia.name",
        registered: "Thursday, November 3, 2016 5:39 PM",
      },
      {
        id: "5f446f2e3900dfec59489477",
        picture: "http://placehold.it/32x32",
        age: 31,
        name: {
          first: "Langley",
          last: "Henson",
        },
        company: "ZOXY",
        email: "langley.henson@zoxy.org",
        registered: "Friday, September 9, 2016 3:48 AM",
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        picture: "http://placehold.it/32x32",
        age: 35,
        name: {
          first: "Lowe",
          last: "Shields",
        },
        company: "TRIPSCH",
        email: "lowe.shields@tripsch.biz",
        registered: "Tuesday, July 18, 2017 9:01 PM",
      },
      {
        id: "5f446f2ef2ab5f5a9f60c4f2",
        picture: "http://placehold.it/32x32",
        age: 27,
        name: {
          first: "Thompson",
          last: "Sharp",
        },
        company: "RADIANTIX",
        email: "thompson.sharp@radiantix.name",
        registered: "Thursday, December 24, 2015 1:12 AM",
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        picture: "http://placehold.it/32x32",
        age: 22,
        name: {
          first: "Earline",
          last: "Gonzales",
        },
        company: "ZILCH",
        email: "earline.gonzales@zilch.biz",
        registered: "Wednesday, August 5, 2020 9:11 PM",
      },
      {
        id: "5f446f2e4eff1030e7316861",
        picture: "http://placehold.it/32x32",
        age: 37,
        name: {
          first: "Barber",
          last: "Waters",
        },
        company: "KEGULAR",
        email: "barber.waters@kegular.biz",
        registered: "Tuesday, April 14, 2020 9:15 PM",
      },
      {
        id: "5f446f2ecc5c4787c403f844",
        picture: "http://placehold.it/32x32",
        age: 34,
        name: {
          first: "Dyer",
          last: "Trevino",
        },
        company: "SLAX",
        email: "dyer.trevino@slax.io",
        registered: "Saturday, August 1, 2015 8:13 PM",
      },
      {
        id: "5f446f2efa7fe184c4014dd2",
        picture: "http://placehold.it/32x32",
        age: 37,
        name: {
          first: "Sheena",
          last: "Castaneda",
        },
        company: "GEEKNET",
        email: "sheena.castaneda@geeknet.name",
        registered: "Monday, January 11, 2016 2:49 AM",
      },
      {
        id: "5f446f2e59f9380a1d03d766",
        picture: "http://placehold.it/32x32",
        age: 38,
        name: {
          first: "Jackson",
          last: "Duran",
        },
        company: "QUILK",
        email: "jackson.duran@quilk.org",
        registered: "Sunday, May 4, 2014 3:15 AM",
      },
      {
        id: "5f446f2e189628dfd4e6225e",
        picture: "http://placehold.it/32x32",
        age: 31,
        name: {
          first: "Gwendolyn",
          last: "Roberson",
        },
        company: "LUXURIA",
        email: "gwendolyn.roberson@luxuria.name",
        registered: "Saturday, May 16, 2020 8:35 PM",
      },
      {
        id: "5f446f2ec56b2fa77d5545ef",
        picture: "http://placehold.it/32x32",
        age: 25,
        name: {
          first: "Davidson",
          last: "Hill",
        },
        company: "MEDCOM",
        email: "davidson.hill@medcom.tv",
        registered: "Monday, March 19, 2018 9:01 PM",
      },
      {
        id: "5f446f2ee1661e64cde14e55",
        picture: "http://placehold.it/32x32",
        age: 39,
        name: {
          first: "Augusta",
          last: "Roy",
        },
        company: "ENERFORCE",
        email: "augusta.roy@enerforce.co.uk",
        registered: "Saturday, January 6, 2018 4:57 AM",
      },
      {
        id: "5f446f2ee5be00208a4481e0",
        picture: "http://placehold.it/32x32",
        age: 34,
        name: {
          first: "Melisa",
          last: "Burks",
        },
        company: "NETUR",
        email: "melisa.burks@netur.me",
        registered: "Saturday, May 27, 2017 4:54 PM",
      },
      {
        id: "5f446f2eae901a82e0259947",
        picture: "http://placehold.it/32x32",
        age: 30,
        name: {
          first: "Myers",
          last: "Carson",
        },
        company: "ISOPOP",
        email: "myers.carson@isopop.me",
        registered: "Friday, February 8, 2019 7:44 AM",
      },
      {
        id: "5f446f2e637138095dcc3db2",
        picture: "http://placehold.it/32x32",
        age: 30,
        name: {
          first: "Allen",
          last: "Bartlett",
        },
        company: "POSHOME",
        email: "allen.bartlett@poshome.co.uk",
        registered: "Saturday, June 6, 2015 1:07 PM",
      },
      {
        id: "5f446f2e2a4fcd687493a775",
        picture: "http://placehold.it/32x32",
        age: 24,
        name: {
          first: "Georgia",
          last: "Justice",
        },
        company: "ZILPHUR",
        email: "georgia.justice@zilphur.tv",
        registered: "Saturday, November 4, 2017 12:19 AM",
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        picture: "http://placehold.it/32x32",
        age: 40,
        name: {
          first: "Snow",
          last: "Cantu",
        },
        company: "GEOFORMA",
        email: "snow.cantu@geoforma.biz",
        registered: "Saturday, July 16, 2016 9:14 PM",
      },
    ];
    

    console.log(getBorrowersForBook(book, accounts))*/