//vars
let totalBudget = document.querySelector('#total'),
    totalLeft = document.querySelector('#left'),
    allExpenses = document.querySelector('.list-group'),
    form = document.querySelector('#add-expense')
    formSubmitBtn = document.querySelector('#formSubmit');


//functions
let userBudget = prompt('How much do you plan to spend at this week???', 'print a number, please');
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

    if(expenseName && amount) {
        //create template for budget itema and add it to the DOM
        itemPattern = `
            <li class="list-group-item expenses__item">${expenseName}<span class="expenses__amount">$${amount}</span></li>
        `
        allExpenses.insertAdjacentHTML('afterbegin', itemPattern);
        form.reset();
        //convert string to number and show left budget in DOM
        totalLeft.innerHTML = parseInt(userBudget) - parseInt(amount);
        
        if((parseInt(userBudget)*0.5) > parseInt(totalLeft.innerHTML) ) {
            totalleftWrap.classList.remove('alert-success');
            totalleftWrap.classList.add('alert-warning');
        }
        if((parseInt(userBudget)*0.25) > parseInt(totalLeft.innerHTML) ) {
            totalleftWrap.classList.remove('alert-warning');
            totalleftWrap.classList.add('alert-danger');
        }

    } else {
        alert(1)
    }
    
})

//listeners