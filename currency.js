const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown");
const btn=document.querySelector("button");
const fromside=document.querySelector("#fromcur");
const toside=document.querySelector("#tocur");
const showval = document.querySelector("#koko");


/*for( i in countryList)
{
    console.log(i,countryList[is]);
}*/

for(let i of dropdowns)
{
    for(let  cur in countryList)
{
    let newcur = document.createElement("option");
    newcur.innerText=cur;
    newcur.value=cur;
    i.append(newcur);
    if(i.name ==="from" && cur==="INR")
    {
        newcur.selected="selected";
    }
else if(i.name==="to" && cur==="USD")
{
    newcur.selected="selected";
}
i.addEventListener("change",(evt)=>
{
    flag(evt.target);
})
}
}


const flag=(element)=>
{

    let curcode=element.value;
    let countrycode=countryList[curcode];
    
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;



}


btn.addEventListener("click", async(box)=>
{
box.preventDefault();
let amount=document.querySelector(".converted");
let amountval=amount.value;
//console.log(amountval);

let baseurl=`${url}/${toside.value.toLowerCase()}/${fromside.value.toLowerCase()}.json`;
let callurl=await fetch(baseurl);
let data= await callurl.json();
let rate = data[fromside.value.toLowerCase()];
//console.log(rate);
 finalamount=amountval*rate;
//console.log(finalamount);

showval.value=finalamount;

});
