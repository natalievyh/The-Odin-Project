const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Read" : "Not Read";
}

const defaultBook = new Book("Winnie the Pooh", "A. A. Milne", 234, true);
const container = document.querySelector(".booksContainer");

function toggleReadStatus(readBtn) {
    if (readBtn.textContent === 'Read') {
        readBtn.textContent = 'Not Read';
        readBtn.className = "notRead";
    } else {
        readBtn.textContent = 'Read';
        readBtn.className = "read";
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "bookDiv";
        container.appendChild(bookDiv);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.className = "removeBtn";
        bookDiv.appendChild(removeBtn);
        removeBtn.addEventListener("click", () => {removeBook(index)});

        // add an image of a book cover to the page
        const bookCover = document.createElement("img");
        bookCover.src = "./book.png";
        bookCover.className = "bookCover";
        bookDiv.appendChild(bookCover);

        // add the book's title + author onto the cover
        const bookContent = document.createElement("div");
        bookContent.className = "book";
        bookDiv.appendChild(bookContent);

        const title = document.createElement("h2");
        title.textContent = book.title;
        const author = document.createElement("h4");
        author.textContent = `by ${book.author}`;
        bookContent.appendChild(title);
        bookContent.appendChild(author);

        // add extra info about the book below
        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement("button");
        read.textContent = `${book.read}`;
        const status = (book.read) === "Read" ? "read" : "notRead";
        read.className = status;
        read.addEventListener("click", () => {toggleReadStatus(read)});
        
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
    })
}

const bookForm = document.querySelector("form");

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
    bookForm.style.display = "block";
    addBtn.style.display = "none";
});

document.querySelector("#submit")
        .addEventListener("click", (event) => {
            event.preventDefault();
            const title = document.querySelector("#title").value.trim();
            const author = document.querySelector("#author").value.trim();
            const pages = document.querySelector("#pages").value;
            const read = document.querySelector("#read").checked;
            const book = new Book(title, author, pages, read);
            addBookToLibrary(book);
        })

document.querySelector("#cancel")
        .addEventListener("click", () => {
            bookForm.reset();
            bookForm.style.display = "none";
            addBtn.style.display = "block";
        })

addBookToLibrary(defaultBook);