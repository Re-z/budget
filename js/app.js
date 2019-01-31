//vars
let totalBudget = document.querySelector('#total'),
    
    allExpenses = document.querySelector('.list-group'),
    form = document.querySelector('#add-expense')
    formSubmitBtn = document.querySelector('#formSubmit');


//functions
// let userBudget = prompt('How much do you plan to spend at this week???');
// totalBudget.innerHTML = userBudget;
formSubmitBtn.addEventListener('click', function (evt) {
    // values of expenseName and amount 
    let expenseName = document.querySelector('#expense').value,
        amount = document.querySelector('#amount').value;
    //preventing default behavior
    evt.preventDefault();

    if(expenseName && amount) {
        itemPattern = `
            <li class="list-group-item">${expenseName} + ${amount}</li>
        `
        allExpenses.insertAdjacentHTML('afterbegin', itemPattern);
        form.reset();
    } else {
        alert(1)
    }
    
})

//listeners