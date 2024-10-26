
async function Show()
{
    const data= await fetch("data");
    const fdata=await data.json();
    console.log(fdata)

    let body=document.querySelector("#body")
    fdata.forEach(element => {

        let tr=document.createElement("tr");
        tr.addEventListener('click',()=>{
            tr.style.backgroundColor="red"
        })


        let name=document.createElement("td");
        name.innerHTML=element.name;
    

        let ID=document.createElement("td");
        ID.innerHTML=element.ID;

        let depart=document.createElement("td");
        depart.innerHTML=element.Depart;

        let desig=document.createElement("td");
        desig.innerHTML=element.Designation;
        tr.append(name,ID,depart,desig)
        body.append(tr);
       
        
    });
}





window.onload=Show()


