var add_btn = document.getElementById("add");
var product_place = document.getElementById("product_place");
var product = document.getElementById("product");
var data = [
{id:1, name:'product 1' ,desc : 'any thing'},
{id:2, name:'product 2' ,desc : 'any thing'},
{id:3, name:'product 3' ,desc : 'any thing'},
{id:4, name:'product 4' ,desc : 'any thing'}
];

//drow function !!

function drowui(items){
    product_place.innerHTML ="";

    items.forEach(function(ele){
        product_place.innerHTML += `
        <div onclick = 'deletitem(${ele.id})'> 
        ${ele.name}
        <div>
        `
        
        
    });
};
    
window.onload = function(){
drowui(data);
};

// add data 
add_btn.addEventListener('click',additem)
var lastid = data.length ? data[data.length -1 ].id : 0;
function additem(){

    if (product.value == ""){
        alert("you sculd enter value");
    }
    data.push({id: ++lastid ,name:product.value,desc : 'any thing'});

    var addeditems = data[data.length-1];
    
    product_place.innerHTML += `
    <div onclick = 'deletitem(${addeditems.id})'> 
    ${addeditems.name}
    <div>
    `
    product.value="";
   




}

// delete data 
function deletitem(id){
var index = data.map(function(i){return i.id}).indexOf(id);

if(index !== -1){
    data.splice(index,1);
    drowui(data);
}

console.log(data);
   
  }
