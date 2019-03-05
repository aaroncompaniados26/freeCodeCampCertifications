console.log('works');
//DOM
const sub = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthly = document.getElementById('monthly-payment');
const totalP = document.getElementById('total-payment');
const totalI = document.getElementById('total-interest');
//error functionality
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

//----------------------
//CLEAR dom
const domCleaner = () => {
      amount.value = '';
      interest.value = '';
      years.value = '';
      //monthly.value = '';
      //totalI.value = '';
      //totalP.value = '';
}
//----------------------

const calculateResults = () => {
      const principal = parseFloat(amount.value);
      const calcInterest = parseFloat(interest.value)/100 /12;
      const calcPayments = parseFloat(years.value) * 12;
      //MOnthly payments
      const x = Math.pow(1 + calcInterest , calcPayments);
      const monthlyPays = (principal*x*calcInterest)/(x-1);

      if(isFinite(monthlyPays)){
            monthly.value = monthlyPays.toFixed(2);
            totalP.value = (monthlyPays * calcPayments).toFixed(2);
            totalI.value = ((monthlyPays * calcPayments) - principal).toFixed(2);
            //UI clean
            domCleaner();
            //Show Results
            document.querySelector('#results').style.display = 'block';
            //Hide Loader
            document.querySelector('#loading').style.display = 'none';
      } 
      else {
            showError("Please check your numbers");
            setTimeout(() =>{
                  document.querySelector('.alert-danger').remove();
            }, 2000); 
      }
};

//------------------
//DISPLAY errors
function showError(error){
      //UI
      //Show Results
      document.querySelector('#results').style.display = 'none';
      //Hide Loader
      document.querySelector('#loading').style.display = 'none';
      //INJECTION
      const markUp = `<div class="alert alert-danger">${error}</div>`;
      card.insertAdjacentHTML("afterbegin", markUp);
};


//Init function
(function init(){
      sub.addEventListener('submit', (e) =>{
            document.querySelector('#loading').style.display = 'block';

            //Display loader
            setTimeout(calculateResults, 2000);

            e.preventDefault();
      });
})();