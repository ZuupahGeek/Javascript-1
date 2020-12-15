class Book {
    constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    }
}

summary = () => {
    return `${this.title} was written by ${this.author} in ${this.year}`
}



const book1 = new Book('Hejhej', 'Jojje', '2015')

book1.title = `bookTitle 1`

console.log(book1)