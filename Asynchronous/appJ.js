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

document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){

      //Create an instance of XML on Http protocol Object
      const xhr = new XMLHttpRequest();

      xhr.open('GET', 'customer.json', true);

      xhr.onload = function(){
            if(this.status === 200){

                  const customer = JSON.parse(this.responseText);
                  
                  console.log('READYSTATE', xhr.readyState );

                  const output = `
                        <ul>
                              <li>ID:${customer.id}</li>
                              <li>Name:${customer.name}</li>
                              <li>Company:${customer.company}</li>
                              <li>Phone:${customer.Phone}</li>
                        </ul>
                  `;
                  document.getElementById('customer').innerHTML = output;
            }
      }
      xhr.send();
}

//-------------

document.getElementById('button2').addEventListener('click', loadCustomers);


function loadCustomers(e){
      //Create an instance of XML on Http protocol Object
      const son = new XMLHttpRequest();

      son.open('GET', 'customers.json', true);

      son.onload = function () {
            if (this.status === 200) {
                  let output = '';
                  
                  const customers = JSON.parse(this.responseText);
                      
                  console.log('READYSTATE', son.readyState);

                  customers.forEach(element => {
                        output +=`
                        <ul>
                              <li>ID:${element.id}</li>
                              <li>Name:${element.name}</li>
                              <li>Company:${element.company}</li>                                    <li>Phone:${element.Phone}</li>
                        </ul>
                        `;
                  });

                  document.getElementById('customers').innerHTML = output;
            }
      }
      son.send();
}