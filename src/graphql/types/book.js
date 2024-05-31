const Book = `

type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}

`

export { Book };