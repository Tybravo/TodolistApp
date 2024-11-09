
/*Get Elemnet By Query Selector To Delete Child Using Parent Id*/
const booklists = document.querySelector("#book-list ul")
console.log(booklists)   

booklists.addEventListener('click', (event)=>{
    const deleteButton = event.target.className
    if(deleteButton == "delete"){
        const litag = event.target.parentNode;
        booklists.removeChild(litag)
    }
})


/*Get Element By Query Selector To Create Element and Add Child*/
const bookList = document.querySelector("#book-ul");
const addButton = document.querySelector("button");
const bookInput = document.querySelector("#book-input");

addButton.addEventListener('click', (event) => {
    const bookName = bookInput.value.trim();
    if (bookName === "") {
        alert("Add a book field cannot be empty");
        return false;
    }

    if (bookName !== "") {
        const li = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkmark";

        const nameSpan = document.createElement("span");
        nameSpan.className = "name";
        nameSpan.textContent = bookName;

        const deleteSpan = document.createElement("span");
        deleteSpan.className = "delete";
        deleteSpan.textContent = "delete";

        const doneSpan = document.createElement("span");
        doneSpan.className = "done";
        doneSpan.textContent = "done";

        doneSpan.addEventListener('click', () => {
            checkBox.checked = true;
            saveToLocalStorage();
        });

        li.appendChild(checkBox);
        li.appendChild(nameSpan);
        li.appendChild(doneSpan);
        li.appendChild(deleteSpan);
        bookList.appendChild(li);

        bookInput.value = "";
    }
});


/*Save To Do List To Local storage*/
function saveToLocalStorage() {
    const books = [];
    bookList.querySelectorAll("li").forEach(li => {
        const book = {
            name: li.querySelector(".name").textContent,
            checked: li.querySelector(".checkmark").checked
        };
        books.push(book);
    });
    localStorage.setItem("books", JSON.stringify(books));
}


/*Load To Do List From Local Storage*/
function loadFromLocalStorage() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach(book => {
        const li = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkmark";
        checkBox.checked = book.checked;

        const nameSpan = document.createElement("span");
        nameSpan.className = "name";
        nameSpan.textContent = book.name;

        const deleteSpan = document.createElement("span");
        deleteSpan.className = "delete";
        deleteSpan.textContent = "delete";

        const doneSpan = document.createElement("span");
        doneSpan.className = "done";
        doneSpan.textContent = "done";

        doneSpan.addEventListener('click', () => {
            checkBox.checked = true;
            saveToLocalStorage();
        });

        li.appendChild(checkBox);
        li.appendChild(nameSpan);
        li.appendChild(doneSpan);
        li.appendChild(deleteSpan);
        bookList.appendChild(li);
    });
}

loadFromLocalStorage();


 // Get Element By Id and And Selector All To Search
 document.getElementById('search-input').addEventListener('keyup', function (e) {
    const searchBook = e.target.value.toLowerCase();
    const books = document.querySelectorAll('#book-list ul li');
  
    books.forEach((book) => {
      const bookName = book.querySelector('.name').textContent.toLowerCase();
      if (bookName.includes(searchBook)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
     }
    });
});

