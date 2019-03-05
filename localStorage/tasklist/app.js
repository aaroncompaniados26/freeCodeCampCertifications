console.log('test');
//DOM elements
//FORM
const form = document.querySelector('#task-form');
let input = document.querySelector('#task');
const btn = document.querySelector('.btn');
//FILTER
let filter = document.querySelector('#filter');
//Tasks list
const tasksList = document.querySelector('ul.collection');
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
            //Render to UI
            tasksList.insertAdjacentHTML('beforeend', result);

            // Store in localStorage
            stockIn(`${input.value}`);

            //Clean afterwards
            input.value = '';
      } 
      else { 
            return '';
      }
      e.preventDefault();
};

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//REMOVE function
const taskRemove = (e) => {
      let removed;
      if(e.target.closest('.fa-remove')){
            removed = e.target.closest('.fa-remove').parentElement.parentElement.remove();
            //DELETE in localStorage
            removeTaskfromLS(e.target.closest('.fa-remove').parentElement.parentElement);
      }
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//ALL Remove function
const allGone = () => {
      //UI
      while(tasksList.firstChild){
            tasksList.removeChild(tasksList.firstChild);
      }
      //localStorage
      localStorage.clear();
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
      //DOM Load Event
      document.addEventListener('DOMContentLoaded', getTasks);
      //Task Adder
      form.addEventListener('submit', addTask);
      //Task Remover
      tasksList.addEventListener('click', taskRemove);
      //TaskS Remover
      clearBtn.addEventListener('click', allGone);
      //Filter listener
      filter.addEventListener('keyup', filtered);
})();

//-- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- -- --

//LOCAL STORAGE FUNCTIONALITY
//STORAGE Status
function stockStatus(){
      let tasks;
      if (localStorage.getItem('tasks') === null) {
            return tasks = [];
      } 
      else 
      {
            return tasks = JSON.parse(localStorage.getItem('tasks'));
      }
}

//SAVE INTO 
function stockIn(task){
      let tasks = stockStatus();

      tasks.push(task); // + new One in Arr

      localStorage.setItem('tasks', JSON.stringify(tasks)) //+ new One to localStorage
}

//BRING STOCK STATUS 
function getTasks(){
      let tasks, result;
      tasks = stockStatus();
      if(tasks.length > 0){
            tasks.forEach(current => {
                  result = `
                  <li class="collection-item">
                        ${current}
                        <a class="delete-item secondary-content">
                              <i class="fa fa-remove"></i>
                        </a>
                  </li>
            `;
                  //Render to UI
                  tasksList.insertAdjacentHTML('beforeend', result);
            });
      }      
};

//REMOVE FROM LocalStorage
function removeTaskfromLS(task){
      let tasks = stockStatus();
      tasks.forEach((current, index) => {
            if(task.textContent === current){
                  tasks.splice(index, 1);
            };
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
};
