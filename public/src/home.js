function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let taken = books.filter((book) => book.borrows[0].returned === false);
  return taken.length;
}

function getMostCommonGenres(books) {
  const allowed = ['genre'];

  let result = books.map((book) => 
  Object.keys(book).reduce((next, key) => {
    if(allowed.includes(key)) {
      return {...next, [key]: book[key] };
    } else {
      return next;
    }
  },{})
  );
  return updateCommonGenre(result);
}

function updateCommonGenre(result){
  let commonGenre = [];
  let genre = [];
  
  for (let book in result) {
    let currentGenre = result[book].genre;

    if (!genre.includes(currentGenre)){
      commonGenre.push({'name': currentGenre, 'count': 1});
      genre.push(currentGenre);
    } else {
      for (let genres in commonGenre) {
        let thisGenre = commonGenre[genres];
        if (thisGenre.name === currentGenre){
          thisGenre.count += 1;
        }
      }
    }
  }
  commonGenre.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);
  while (commonGenre.length > 5) {
    commonGenre.pop();
  }

  return commonGenre;
}

function getMostPopularBooks(books) {
  let popularity = [];
  for (let book in books) {
    let popCount = books[book].borrows.length;
    popularity.push({name: books[book].title, count: popCount});
  }

  popularity.sort((bookA, bookB) => bookA.count > bookB.count ? -1 : 1)
  while (popularity.length > 5){
    popularity.pop();
  }

  return popularity;
}

function getMostPopularAuthors(books, authors) {
  let authorPop = [];
  let authorBooks = [];
  for (let auth in authors){
    let currentAuthor = authors[auth];
    let currentAuthorName = authors[auth].name;
    authorBooks.push({name: `${currentAuthorName.first} ${currentAuthorName.last}`, id: currentAuthor.id, books: 0});
  }

  for (let book in books) {
    let currentBook = books[book];
    const {borrows} = currentBook;
    const { authorId } = currentBook;
    for (let author in authorBooks){
      let currentAuthor = authorBooks[author];
      if ( authorId === currentAuthor.id ) {
        currentAuthor.books += borrows.length;
      }
    }
  }

  for (let author in authorBooks) {
    let currentAuthor = authorBooks[author];
    authorPop.push({name: currentAuthor.name, count: currentAuthor.books}); 
  }
  
  authorPop.sort((authA, authB) => authA.count > authB.count ? -1 : 1);

  while (authorPop.length > 5) {
    authorPop.pop();
  }
  return authorPop;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
