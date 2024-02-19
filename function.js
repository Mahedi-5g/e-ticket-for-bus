// const Seats = document.querySelectorAll("#add-btn");
// let count = 0;
// let less = 40;
// for (const seat of Seats) {
//     seat.addEventListener("click", function (e) {
//         count = count + 1;
//         less = less - 1;

//         setInnerText("seat-count", count);
//         document.getElementById("available-seat").innerText = less;
//         setInnerText("available-seat", less);


//         document.getElementById("seat-number").innerText = e.target.innerText;
//         const selectedContainer = document.getElementById("selected-seat");

//         const li = document.createElement("li");
//         const p = document.createElement("p");
//         p.innerText = e.target.innerText;

//         li.appendChild(p);
//         selectedContainer.appendChild(li);

//     });
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }




// const Seats = document.querySelectorAll("#add-btn");
// let count = 0;
// let less = 40;
// let totalPrice = 0;

// for (const seat of Seats) {
//     seat.addEventListener("click", function (e) {
//         if (count < 4 && !e.target.classList.contains("selected")) {
//             count++;
//             less--;
//             totalPrice += 550; // Assuming each seat costs 550 Taka

//             e.target.classList.add("selected");
//             e.target.style.backgroundColor = "#1DD100";
//             setInnerText("seat-count", count);
//             document.getElementById("available-seat").innerText = less;
//             setInnerText("available-seat", less);

//             const selectedContainer = document.getElementById("selected-seat");
//             const li = document.createElement("li");
//             const p = document.createElement("p");
//             p.innerText = e.target.innerText;
//             li.appendChild(p);
//             selectedContainer.appendChild(li);

//             // Update total and grand-total prices
//             updatePrices();
//         }
//     });
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }

// function updatePrices() {
//     const total = document.getElementById("total");
//     const grandTotal = document.getElementById("grand-total");
//     total.innerText = totalPrice;
//     grandTotal.innerText = totalPrice;
// }


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
            e.target.style.backgroundColor = "#1DD100"; // Change background color
            setInnerText("seat-count", count);
            document.getElementById("available-seat").innerText = less;
            setInnerText("available-seat", less);

            const selectedContainer = document.getElementById("selected-seat");
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerText = e.target.innerText;
            li.appendChild(p);
            selectedContainer.appendChild(li);

            // Update total and grand-total prices
            updatePrices();
        }
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function updatePrices() {
    grandTotalPrice = totalPrice; // Initially set grand total to total price

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
    alert("You have selected 4 seats!");
}
