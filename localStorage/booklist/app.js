console.log('wors');

//BOOK Constructor
class Book{
      constructor(title, author, isbn){
            this.title = title;
            this.author = author;
            this.isbn = isbn;
      }
}




//UI Constructor
class UI {
      //ADD
      addBookToList(book){
            const list = document.getElementById('book-list');
            const markUP = `
                  <tr>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="delete">X</a></td>
                  </tr>
            `;
            list.insertAdjacentHTML('afterbegin', markUP);
      }

      //CLEAN UI
      clearFields(){
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
      }
}



//EVENTS 
(function init(){
      document.getElementById('book-form').addEventListener('submit', (e) =>{
            //DOM
            const title = document.getElementById('title').value,
                  author = document.getElementById('author').value,
                  isbn = document.getElementById('isbn').value;

            //Instance
            const book = new Book(title, author, isbn);



            // + book to list UI
            const ui = new UI();

            ui.addBookToList(book);

            ui.clearFields();
 

            e.preventDefault();
      });
})();