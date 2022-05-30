let btn = document.querySelector("confirm");


function mycheckout(){
    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let address=document.getElementById("address").value;

    // 0 seconds : Your order is accepted 
    // 3 seconds : Your order is being Prepared 
    // 8 seconds : Your order is being packed  
    // 10 seconds : Your order is out for delivery 
    // 12 seconds : Order delivered
    setTimeout(function(){
        alert("Your order is accepted");
    },0);

    setTimeout(function(){
        alert("Your order is being Prepared");
    },3000);

    setTimeout(function(){
        alert("Your order is being packed");
    },8000);

    setTimeout(function(){
        alert("Your order is out for delivery");
    },10000);

    setTimeout(function(){
        alert("Order delivered");
    },12000);
}