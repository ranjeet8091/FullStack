

const input = document.querySelector("#bookid");
const btn = document.querySelector("#btn")

btn.addEventListener('click', (events) => {
    events.preventDefault();
    const BookID = input.value;
    console.log(BookID)

    fetch("http://localhost:3000/BookDetails", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ val: BookID })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))

    })
