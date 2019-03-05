console.log('test');
//DOM elements
//FORM
const form = document.querySelector('#task-form');
let input = document.querySelector('#task');
const btn = document.querySelector('.btn');
//FILTER
let filter = document.querySelector('#filter');
//Tasks list
const tasks = document.querySelector('ul.collection');
//CLEAR btn
const clearBtn = document.querySelector('.clear-tasks');


//APP Controller


//ADD function   -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- -- --
const addTask = (e) => {
      let result;
      if (input.value === '') alert('Please input a task'); //Empty?
      if(input.value.length >= 3) {  
            // Save
            result = `
                  <li class="collection-item">
                        ${input.value}
                        <a class="delete-item secondary-content">
                              <i class="fa fa-remove"></i>
                        </a>
                  </li>
            `;
      } else { return '';}
      //Render to UI
      tasks.insertAdjacentHTML('beforeend', result);
      //Clean afterwards
      input.value = '';

      e.preventDefault();
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//REMOVE function
const taskRemove = (e) => {
      let removed;
      if(e.target.closest('.fa-remove')){
            removed = e.target.closest('.fa-remove');
            removed.parentElement.parentElement.remove();
      }
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//ALL Remove function
const allGone = () => {
      while(tasks.firstChild){
            tasks.removeChild(tasks.firstChild);
      }
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


//FILTER function
const filtered = (e) => {
      const text = e.target.value.toLowerCase();
      //All
      document.querySelectorAll('.collection-item').forEach(current => {
            const item = current.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                  current.style.display = 'block';
            } else { 
                  current.style.display = 'none';
            }
      });
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



//Init function   
(function loadListeners(){
      //Task Adder
      form.addEventListener('submit', addTask);
      //Task Remover
      tasks.addEventListener('click', taskRemove);
      //TaskS Remover
      clearBtn.addEventListener('click', allGone);
      //Filter listener
      filter.addEventListener('keyup', filtered);
})();

//-- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- -- --

//LOCAL STORAGE FUNCTIONALITY
