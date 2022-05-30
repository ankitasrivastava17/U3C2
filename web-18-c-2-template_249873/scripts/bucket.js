// On clicking remove button the item should be removed from DOM as well as localstorage.
var bucket= JSON.parse(localStorage.getItem("coffee")) || [];
appendToBucket(bucket);


function appendToBucket(bucket){
    // console.log(bucket);
    let bucketDiv = document.getElementById("bucket");
    let total = document.getElementById("total_amount");
    let amount=0;
    bucketDiv.innerHTML = '';

    bucket.forEach(function(elem,index){
        
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.image;
        image.style.width = "300px";
        image.style.height = "300px";
        image.style.marginTop = "30px";

        let name = document.createElement("p");
        name.innerHTML = elem.title;

        let price = document.createElement("p");
        price.innerHTML = elem.price;
        amount = amount + elem.price;

        let btn = document.createElement("button");
        btn.innerHTML = "remove";
        btn.setAttribute("id","remove_coffee");

        btn.addEventListener("click", function(){
  
            bucket.splice(index, 1);
            localStorage.setItem("coffee",JSON.stringify(bucket));
            amount = amount - elem.price;
            location.reload(true);

        })
        div.append(image,name,price,btn);
        bucketDiv.append(div);
        document.getElementById("total_amount").innerHTML = amount;
        
    });
}