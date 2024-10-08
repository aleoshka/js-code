function btnClick() {
    tips.textContent = (bill.value * tipPercent.value / 100).toFixed(2);
    totalAmount.textContent = (Number(bill.value) + Number(tips.textContent)).toFixed(2);
    amountPerPerson.textContent = (totalAmount.textContent / countOfPeople.value).toFixed(2);
}

const bill = document.getElementById("bill");
const tipPercent = document.getElementById("tip-percent");
const countOfPeople = document.getElementById("count-of-people");

const tips = document.getElementById("tips");
const totalAmount = document.getElementById("total-amount");
const amountPerPerson = document.getElementById("amount-per-person");

const btn = document.getElementById("only-button");
btn.addEventListener("click", btnClick);


