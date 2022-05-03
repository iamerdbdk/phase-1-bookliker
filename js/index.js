
const bookList = document.querySelector('#list');
const details = document.querySelector("#show-panel");
const user =  {id: 100001, username: "pouros"};

document.addEventListener("DOMContentLoaded", function() {
    // FETCH
    fetch(`http://localhost:3000/books`)
    .then(resp => resp.json())
    .then(books => {
        books.forEach((book) => {
            bookHTML(book);
        });
    });
});

const bookHTML = (book) => {
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        details.innerHTML = "";
        const img = document.createElement("img");
        const title = document.createElement("h4");
        const userList = document.createElement("ul");
        const btn = document.createElement("button")
        btn.innerText = "Like";
        btn.addEventListener('click', () => {

        })
        
        img.src = book.img_url;
        title.innerText = book.title;
        book.users.forEach((user) => {
            const li = document.createElement('li')
            li.innerText = user.username;
            userList.append(li)
        })
        details.append(img, title, userList, btn);
    });
    li.innerText = book.title;
    bookList.append(li);
};