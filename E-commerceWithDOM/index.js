//---------------------------------------------------------------------
//Notification
function Notification() {
    var notifi = document.querySelector(".notifi")

    var All = (localStorage.getItem("Ids"));
    All = JSON.parse(All);
    let length = 0;
    if (All) {
        length = All.length;
    }

    notifi.innerHTML = length;
}
//-------------------------------------------------------------------------
// Remove from the local storage
async function Remove(id) {

    var All = (localStorage.getItem("Ids"));
    All = await JSON.parse(All);
    console.log(All);

    let inde = All.indexOf(id);
    All.splice(inde, 1);
    console.log(All);

    localStorage.setItem("Ids", JSON.stringify(All));
    showCart();
    Notification();


}
//--------------------------------------------------------------------------------

//Show Cart
async function showCart() {
    var add = document.querySelector(".container");
    add.innerHTML = "";
  

    var All = (localStorage.getItem("Ids"));
    if (All) {
        All = await JSON.parse(All);
    }

    var data = await fetch("/E-commerce/product.json");
    data = await data.json();
    let total = 0;
    All.forEach(local => {

        data.forEach(element => {
            if (local == element.id) {
                const div = document.createElement("div");
                div.innerHTML = `
                         <h2>${element.name}</h2>
                         <img src="${element.img}" alt="Image is found">
                         <h3> ₹${element.price}</h3>
                         <button onclick="Remove(${element.id})"> Remove</button>
                         
            `;

                div.style.border = "2px solid black";
                div.style.padding = "10px";
                div.style.margin = "10px";
                div.style.textAlign = "center";
                div.style.backgroundColor = "#f9f9f9";
                div.style.borderRadius = "8px";
                div.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                add.appendChild(div);
                total += element.price;

            }
        })

    })
    console.log(total)
    const div = document.createElement('div');
    div.classList.add('card', 'p-4', 'shadow-sm');

    div.innerHTML = `
        <h2 class="text-center mb-4">Payment Summary</h2>
        <div class="d-flex justify-content-between mb-3">
            <h4>Total Amount:</h4>
            <h4>₹${total}</h4>
        </div>
        <hr>
        <h5 class="mb-3">Select Payment Method:</h5>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="paymentMethod" id="cardPayment" value="card">
            <label class="form-check-label" for="cardPayment">
                Credit/Debit Card
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="paymentMethod" id="upiPayment" value="upi">
            <label class="form-check-label" for="upiPayment">
                UPI
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="paymentMethod" id="netBankingPayment" value="netbanking">
            <label class="form-check-label" for="netBankingPayment">
                Net Banking
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="paymentMethod" id="walletPayment" value="wallet">
            <label class="form-check-label" for="walletPayment">
                Mobile Wallet
            </label>
        </div>
        <hr>
        <button class="btn btn-primary btn-block mt-4" onclick="HandlePayment()">Proceed to Payment</button>
    `;


    add.appendChild(div);
    if(total==0)
    {
        showOnHomePage()
    }


}
//------------------------------------------------------------------------------------------

function HandlePayment() {
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    var add = document.querySelector(".container");
    add.innerHTML = "";

    switch (paymentMethod) {
        case "card":
            var div = document.createElement("div");
            div.className = "text-center";
            div.innerHTML = `
            <img src="/E-commerce/Card.jpg" class="img-fluid mb-3" alt="Card Payment">
            <h5>Enter your card details to proceed with the payment.</h5>
            <input type="text" class="form-control mb-2" placeholder="Card Number">
            <input type="text" class="form-control mb-2" placeholder="Expiry Date">
            <input type="text" class="form-control mb-2" placeholder="CVV">
            <div class="mt-3">
              
            </div>
        `;
        
            add.appendChild(div);
            break;

        case "upi":
            var div = document.createElement("div");
            div.className = "text-center";
            div.innerHTML = `
                <img src="/E-commerce/Sccaner.png" class="img-fluid mb-3" alt="UPI Payment">
                <h5>Scan the QR code or enter your UPI ID to proceed.</h5>
                <input type="text" class="form-control mb-2" placeholder="Enter UPI ID">
            `;
           add.appendChild(div);
            break;

        case "netbanking":
            var div = document.createElement("div");
            div.className = "text-center";
            div.innerHTML = `
                <img src="/E-commerce/netBanking.jpeg" class="img-fluid mb-3" alt="Net Banking">
                <h5>Select your bank to proceed with Net Banking.</h5>
                <select class="form-control mb-2">
                    <option>Select Bank</option>
                    <option>Bank 1</option>
                    <option>Bank 2</option>
                </select>
            `;
            add.appendChild(div);
            break;

        case "wallet":
            var div = document.createElement("div");
            div.className = "text-center";
            div.innerHTML = `
                <img src="/E-commerce/wallet.jpeg" class="img-fluid mb-3" alt="Mobile Wallet">
                <h5>Select your mobile wallet to proceed.</h5>
                <select class="form-control mb-2">
                    <option>Select Wallet</option>
                    <option >Phone Pay</option>
                    <option selected>Google Pay</option>
                </select>
            `;
            add.appendChild(div);
            break;

        default:
            add.innerHTML = `<p class="text-danger">Please select a payment method.</p>`;
            break;
    }
}


//-------------------------------------------------------------------------------------------
// addToCart

async function addToCart(id) {
    var All = (localStorage.getItem("Ids"));
    if (All) {
        All = await JSON.parse(All);
    } else {
        All = [];
    }
    let count = 0;
    All.forEach(ele => {
        if (ele == id) {
            count++;
        }
    })
    if (count == 0) {
        All.push(id);
        alert("Item add to Cart")
    }
    else {
        alert("Item is Already in cart")
    }
    localStorage.setItem("Ids", JSON.stringify(All));
    Notification();
}
//---------------------------------------------------------------------------------------------




//when product click
async function showaAllProduct() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    var data = await fetch("/E-commerce/product.json");
    data = await data.json();
    console.log(data);

    let count = 1;
    data.forEach(element => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${element.name}</h2>
            <img src="${element.img}" alt="Image is found">
            <h3>₹${element.price}</h3>
            <button onclick="addToCart(${element.id})"> Add to Cart</button>
            `;
        div.style.border = "2px solid black";
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.style.textAlign = "center";
        div.style.backgroundColor = "#f9f9f9";
        div.style.borderRadius = "8px";
        div.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        container.appendChild(div);

    });
}
//----------------------------------------------------------------------------------------------




async function showOnHomePage() {
    var container = document.querySelector(".container");
    container.innerHTML = "";

    Notification();

    ////
    var data = await fetch("/E-commerce/product.json");
    data = await data.json();
    console.log(data);

    let count = 1;
    const row = document.createElement("div");
    row.className = "row";
    data.forEach(element => {
        if (count < 4) {
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4"; // Bootstrap class for responsive layout

            col.innerHTML = `
                <div class="card h-100">
                    <img src="${element.img}" class="card-img-top" alt="${element.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">₹${element.price}</p>
                        <button class="btn btn-primary mt-auto" onclick="addToCart(${element.id})">Add to Cart</button>
                    </div>
                </div>
            `;

            row.appendChild(col);
            count++;
        }


    });
    container.appendChild(row);
    container.style.margin = " 100px auto"
}

addEventListener('load', showOnHomePage());
