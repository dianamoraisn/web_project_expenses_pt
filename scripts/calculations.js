let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
["groceries", 33],
["restaurants", 50],
["transport", 12],
["home", 70],
["subscriptions", 14],
["groceries", 28],
["subscriptions", 12]
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
    if (expenseEntries.length === 0) { return 0; }
    return totalExpensesValue / expenseEntries.length;}

    







