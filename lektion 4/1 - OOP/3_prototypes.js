function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

}

Book.prototype.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.bookAge = function() {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}


const book1 = new Book('My life, yo,', 'Joachim', '2020')
console.log(book1.bookAge())