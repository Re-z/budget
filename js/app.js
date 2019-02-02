//vars
let totalBudget = document.querySelector('#total'),
    totalLeft = document.querySelector('#left'),
    allExpenses = document.querySelector('.list-group'),
    form = document.querySelector('#add-expense')
    formSubmitBtn = document.querySelector('#formSubmit'),
    errorField = document.querySelector('#form-error'),
    successField = document.querySelector('#form-success'),
    outOfBudgetField = document.querySelector('#out-of-budget');

//functions

let userBudget = false;
function checkPrompt(){
    userBudget = prompt('How much do you plan to spend at this week???', 'print a number, please');
    //check if prompt fielad is filled and contains number
    if(userBudget != null && userBudget.length > 0 && !isNaN(userBudget)) {return true}
    else {userBudget = false};
}
// if all good = go forward, else = show prompt again
while (userBudget == false) {
    checkPrompt();
}

totalBudget.innerHTML = userBudget;
totalLeft.innerHTML = userBudget;
formSubmitBtn.addEventListener('click', function (evt) {

        
    let totalLeft = document.querySelector('#left'),
        // field, that will be colored if left budget is less than 0.5 or 0.25
        totalleftWrap = document.querySelector('.restante'),
        expenseName = document.querySelector('#expense').value,
        amount = document.querySelector('#amount').value;
    //preventing default behavior
    evt.preventDefault();

    if(expenseName && !isNaN(amount)) {
        //hide error
        errorField.style.display = 'none';



        //create template for budget itema and add it to the DOM
        itemPattern = `
            <li class="list-group-item expenses__item">${expenseName}<span class="expenses__amount">$${amount}</span></li>
        `
        allExpenses.insertAdjacentHTML('afterbegin', itemPattern);
        form.reset();

        //convert string to number and show left budget in DOM
        totalLeft.innerHTML = parseInt(totalLeft.innerHTML) - parseInt(amount);
        
        //show success field
        successField.style.display = 'block';

        // hide success field after 3 seconds
        setTimeout(function(){
            successField.style.display = 'none'
        }, 3000)
        if ((parseInt(userBudget)*0.5) > parseInt(totalLeft.innerHTML) ) {
            totalleftWrap.classList.remove('alert-success');
            totalleftWrap.classList.add('alert-warning');
        }
        if ((parseInt(userBudget)*0.25) > parseInt(totalLeft.innerHTML) ) {
            totalleftWrap.classList.remove('alert-warning');
            totalleftWrap.classList.add('alert-danger');
        }
        if ((parseInt(totalLeft.innerHTML)) <= 0) {
            outOfBudgetField.style.display = 'block';
            totalleftWrap.classList.add('alert-danger');

            formSubmitBtn.setAttribute('disabled', 'true')
        }

    } else {
        errorField.style.display = 'block';
    }
    
})

//listeners