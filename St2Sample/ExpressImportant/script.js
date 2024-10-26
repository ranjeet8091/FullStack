

const input = document.querySelector("#empid");
const btn = document.querySelector("#btn")
const div = document.querySelector("#con")
btn.addEventListener('click', () => {
    const data = input.value;
    fetch("http://localhost:3000/Details", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ val: data })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let box = document.createElement("div")
            if (data.msg) {
                box.innerText = data.msg
            }
            else {
                box.innerText = `Employee Name: ${data.empName} Employee ID: ${data.empid} Employee Dept :${data.empDept}`
            }

            div.append(box)
        })
        .catch(err => console.log(err))

})