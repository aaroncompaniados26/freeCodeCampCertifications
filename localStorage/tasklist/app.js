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

//ADD function
const addTask = (e) => {
      let result;
      if (input.value === '') alert('Please input a task'); //Empty?
      if(input.value.length > 5) {  
            // Save
            result = `
                  <li class="collection-item">
                        ${input.value}
                        <a class="delete-item secondary-content">
                              <i class="fa fa-remove"></i>
                        </a>
                  </li>
            `;
      }
      //Render to UI
      tasks.insertAdjacentHTML('beforeend', result);
      //Clean afterwards
      input.value = '';

      e.preventDefault();
}


//Init function
(function loadListeners(){
      //Task Event
      form.addEventListener('submit', addTask);
})();



