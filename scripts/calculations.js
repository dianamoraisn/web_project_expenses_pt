let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

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

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
    if (calculateBalance() < 0) {   
      balanceColor = "red";
    } else if (calculateBalance() < budgetValue * 0.25) {
      balanceColor = "orange";
    } else {
      balanceColor = "green";
    }
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      total += expense[1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions"
  ];

  const categoriesTotals = [];

  for (const category of categories) {
    const total = calculateCategoryExpenses(category);
    categoriesTotals.push([category, total]);
  }

  let largestCategory = "";
  let largestTotal = 0;

  for (const [category, total] of categoriesTotals) {
    if (total > largestTotal) {
      largestTotal = total;
      largestCategory = category;
    }
  }

  return largestCategory;
}

function addExpenseEntry(expenseEntry) {
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
}
