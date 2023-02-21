const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    //Add your code here
    const prices = document.querySelectorAll(".price");
    let sum = 0;
    prices.forEach(price => sum += parseFloat(price.innerText));
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.colSpan = "2";
    totalCell.innerText = `Total Price: $${sum.toFixed(2)}`;
    totalRow.appendChild(totalCell);
    totalCell.setAttribute("id", 'ans')
    document.querySelector("table").appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
