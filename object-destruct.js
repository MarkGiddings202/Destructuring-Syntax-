let movie = {
  title: "Shrek",
  year: 2021,
  length: 155,
  book: true,
};

const {book, title, length, rating = 86} = movie

console.log(book)
console.log(length)
console.log(title)
console.log(rating)