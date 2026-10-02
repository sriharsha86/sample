const form = document.querySelector("form");
const expenseInput = document.getElementById("expense");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let total = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const expenseName = expenseInput.value.trim();
    const amount = Number(amountInput.value);

    
    if (expenseName === "" || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    
    const listItem = document.createElement("li");
    listItem.textContent = `${expenseName}: ₹${amount.toFixed(2)}`;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        total -= amount;
        totalAmount.textContent = `₹${total.toFixed(2)}`;
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    expenseList.appendChild(listItem);

    
    total += amount;
    totalAmount.textContent = `₹${total.toFixed(2)}`;


    expenseInput.value = "";
    amountInput.value = "";
});
