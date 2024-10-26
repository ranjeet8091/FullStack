
const body=document.querySelector("#body")
async function show() {
    
    const data= await fetch("getData");
    const fdata=await data.json();
    console.log(fdata)

    fdata.forEach(element => {
        let tr= document.createElement("tr");

        let name=document.createElement("td")
        name.innerHTML=element.name

        let id=document.createElement("td")
        id.innerHTML=element.ID

        let depart=document.createElement("td")
        depart.innerHTML=element.Depart

        let Desin=document.createElement("td")
        Desin.innerHTML=element.Designation

        if(element.status=="pending")
        {
            tr.style.backgroundColor="red"
        }
        else
        {
            tr.style.backgroundColor="green"
        }

        tr.append(name,id,depart,Desin)
        body.append(tr);

    });
}














window.onload=show();