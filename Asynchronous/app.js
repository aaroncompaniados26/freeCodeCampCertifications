//HTTP STATUS
//    200 : IT IS OK
//    403 : 'Forbidden'
//    404 : 'Not Found'

//readyState Values
//    0: request not initialized
//    1: server connection established
//    2: request received
//    3: processing request 
//    4: request finished and response is ready  >> onload stage **

//--------------------------------------------------------------------

// XHR OBJECT METHODS & WORKING WITH TEXT
document.getElementById('getData').addEventListener('click', loadData);

function loadData(){
      //Create an instance of XML on Http protocol Object
      const xhr = new XMLHttpRequest();


      console.log('READYSTATE', xhr.readyState);

      //OPEN
      xhr.open('GET', 'data.txt', true);

      // Optional - Used for spinners/loaders
      xhr.onprogress = function(){
            console.log('READYSTATE', xhr.readyState);
      }

      xhr.onload = function(){
            console.log('READYSTATE', xhr.readyState);
            if(this.status === 200){      //get data output all behind the scenes , no page refresh or call to servers
                  
                  document.getElementById('display').innerHTML =`<h2>${this.responseText}</h2>`;
            }
      }

      // xhr.onreadystatechange = function(){
      //       if(this.status === 200 && this.readyState === 4){
      //             console.log(this.responseText);
      //       }
      // }

      //ON Error , IN CASE something goes wrong
      // xhr.onerror = function () {
      //       console.log('Request Error...');
      // }

      xhr.send(); 
};
