const Seats = document.querySelectorAll("#add-btn");
let count = 0;
let less = 40;
let totalPrice = 0;
let grandTotalPrice = 0;

for (const seat of Seats) {
    seat.addEventListener("click", function (e) {
        if (count < 4 && !e.target.classList.contains("selected")) {
            count++;
            less--;
            totalPrice += 550; // Assuming each seat costs 550 Taka

            e.target.classList.add("selected");
            e.target.style.backgroundColor = "#1DD100";
            setInnerText("seat-count", count);
            document.getElementById("available-seat").innerText = less;
            setInnerText("available-seat", less);

            const selectedContainer = document.getElementById("selected-seat");
            const div = document.createElement("div");
            div.classList.add("flex");
            const p1 = document.createElement("p");
            p1.innerText = e.target.innerText;
            const p2 = document.createElement("p");
            p2.innerText = "economy"
            const p3 = document.createElement("p");
            p3.innerText = "550"
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            selectedContainer.appendChild(div);

            updatePrices();
        } else {
            showAlert();
        }
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function updatePrices() {
    grandTotalPrice = totalPrice;

    const total = document.getElementById("total");
    const grandTotal = document.getElementById("grand-total");
    total.innerText = totalPrice;


    const couponInput = document.querySelector("input[type='text']");
    if (couponInput.value.toUpperCase() === "NEW15") {
        const discountAmount = (totalPrice * 15) / 100;
        grandTotalPrice -= discountAmount;
    } else if (couponInput.value === "Couple 20") {
        const discountAmount = (totalPrice * 20) / 100;
        grandTotalPrice -= discountAmount;
    }


    grandTotal.innerText = grandTotalPrice;

}
const applyCouponBtn = document.querySelector("#apply-coupon-btn");
applyCouponBtn.addEventListener("click", function () {
    updatePrices();
});


function showAlert() {
    alert("You can only select up to 4 seats!");
}
