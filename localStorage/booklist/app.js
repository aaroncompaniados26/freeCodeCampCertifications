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
      //SHOW ALERT
      static showAlert(str, error){
            const markUP = `
                  <div class="alert ${error}">
                        ${str} 
                  </div>
            `;
            const container = document.querySelector('.container');
            
            //HTML Injection
            container.insertAdjacentHTML('afterbegin', markUP);
      }
}



//EVENTS 
(function init(){
      //ON SUBMIT
      document.getElementById('book-form').addEventListener('submit', (e) =>{
            //DOM
            const title = document.getElementById('title').value,
                  author = document.getElementById('author').value,
                  isbn = document.getElementById('isbn').value;

            if(title == '' || author == '' || isbn == '') {
                  UI.showAlert('Please fill in the fields', 'error');
                  
                  setTimeout(()=>{
                        document.querySelector('.alert').remove();
                  },2000);
            } 
            else  
            {
                  //Instance
                  const book = new Book(title, author, isbn);

                  // + book to list UI
                  const ui = new UI();

                  ui.addBookToList(book);

                  // UI success notifications
                  UI.showAlert('Book added', 'success');
                  setTimeout(() => {
                        document.querySelector('.success').remove();
                  }, 2000);

                  ui.clearFields();
            }
            e.preventDefault();
      });
      //ON DELETE
      document.getElementById('book-list').addEventListener('click' ,(e) => {
            if(e.target = 'delete'){
                  e.target.parentElement.parentElement.remove();
            }
      });
})();