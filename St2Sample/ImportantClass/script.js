
const empID = document.querySelector("#user");
const btn = document.querySelector("#button");
const div = document.querySelector("#con")

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const data = empID.value;
    console.log(data)
    fetch("http://localhost:3000/getDetails", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ val: data })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.empName)
            let box = document.createElement("div")
            box.innerText = ""
            box.innerText = `Employee Name: ${data.empName} Employee ID: ${data.empid} Employee Dept :${data.empDept}`
            div.append(box)
        })
        .catch(err => console.log(err));



})


