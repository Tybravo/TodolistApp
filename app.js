
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



const bookList = document.querySelector("#book-ul")
const addButton = document.querySelector("button")
const bookInput = document.querySelector("#book-input")


addButton.addEventListener('click', (event)=>{
    const bookName = bookInput.value.trim();
    if(bookName == ""){
        alert("Add a book field cannot be empty");
        return false;
    }


    if(bookName != ""){

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

        li.appendChild(checkBox);
        li.appendChild(nameSpan);
        li.appendChild(doneSpan);
        li.appendChild(deleteSpan);
        bookList.appendChild(li);

        bookInput.value = "";
        bookName = "";
    }
})




 // Get Element By Id and And Selector All To Search
 document.getElementById('search-input').addEventListener('keyup', function (e) {
    const searchBook = e.target.value.toLowerCase();
    const books = document.querySelectorAll('#book-list ul li');
  
    books.forEach((book) => {
      const bookName = book.firstElementChild.textContent.toLowerCase();
      if (bookName.includes(searchBook)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
     }
    });
});



