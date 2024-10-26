


 async function showCart() {
    var add = document.querySelector(".addToCart");
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
    // if(total==0)
    // {
    //     showOnHomePage()
    // }


}



window.onload=showCart()