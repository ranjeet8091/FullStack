
let data
fetch("category.json")
.then(response=>response.json())
.then(result=>{
    data=result;
})

function getData()
{
   const selecteElement=document.getElementById("category");
   const selectValue=selecteElement.value;

   if(selectValue==="fashion")
   {
    fashion()

   }
   else if(selectValue==="product")
   {
 
    product();
   }
}

function fashion()
{
   data.fashion.forEach(element => {
    console.log(element.name);
    
   });
}
function product()
{
    data.product.forEach(element=>{
        console.log(element.pname);
    })
}
