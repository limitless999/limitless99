let balance = 0;
const balanceElement = document.getElementById('balance');

function add() {
  const amountElement = document.getElementById('amount');
  const amount = parseInt(amountElement.value, 10);
  if (!isNaN(amount)) {
    balance += amount;
    updateBalance();
  }
}

function subtract() {
  const amountElement = document.getElementById('amount');
  const amount = parseInt(amountElement.value, 10);
  if (!isNaN(amount)) {
    balance -= amount;
    updateBalance();
  }
}

function updateBalance() {
  balanceElement.textContent = balance;
}
