
const form = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalElement = document.getElementById("total");

let total = 0;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Create expense item
    const item = document.createElement("li");
    item.textContent = `${name} - ₹${amount} - ${category}`;

    // Create delete button
    const button = document.createElement("button");
    button.textContent = "Delete";

    item.appendChild(button);
    expenseList.appendChild(item);

    // Update total
    total += amount;
    totalElement.textContent = total;

    // Delete expense and update total
    button.addEventListener("click", function() {
        item.remove();

        total -= amount;
        totalElement.textContent = total;
    });

    // Clear form
    form.reset();
});
