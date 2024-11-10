/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

const book = getBook(3);
//books;

// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title);

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
//const newGenres = [...genres, "epic fantasy"];

//spread operator
const newGenres = ["epic fantasy", ...genres];

newGenres;

const updateBook = {
  ...book,
  // Adding new property
  moviepublicationDate: "2001-12-19",
  //overwriting an existing property
  pages: 1210,
};
updateBook;
console.log(primaryGenre, secondaryGenre, otherGenres);

// `` template literals

const summary = `${title} ,a ${pages}-page long book,was written by  ${author}`;
summary;

// ternary operator
const pageRanges = pages > 1000 ? "over a thousand" : "less than thousand";
pageRanges;

//arrow function
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("")[0]; //arrow fun

console.log(getYear(publicationDate));

// short circuits operator
console.log(true && "some string");
console.log(false && "some string");

//falsy : 0,null,'',undefined
console.log("jonas" && "some string");
console.log(0 && "some string");

// or operator
console.log(true || "some string");
console.log(false || "some string");
const count = false ?? "nodata";
count;

//optional chaining
function getTotalReviewCount(book) {
  const gooread = book.reviews.goodreads.reviewsCount;
  //const librarything = book.reviews.librarything?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return gooread + librarything;
}

console.log(getTotalReviewCount(book));

// map method array

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2); // callback fun fo each el in array
console.log(x);

const titles = books.map((book) => book.title);
titles;

// map method with arrow function

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// filter method also callback  fun
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => hasMovieAdaptation);

longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const pageAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pageAllBooks;

const arr = [3, 7, 1, 9, 6];
//const sorted = arr.sort((a, b) => a - b);
// solving mutated
const sorted = arr.slice().sort((a, b) => a - b); // take a copy

sorted;
arr;
// solving mutated

// Adding newBook
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// Delete book
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// update book
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("sara");

// asyn fun
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);

console.log("jonas");
